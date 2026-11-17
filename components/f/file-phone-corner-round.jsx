import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ll0-8pbyt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M13 3H9a4 4 0 0 0-4 4v10a4 4 0 0 0 4 4m4-18l6 6m-6-6v4a2 2 0 0 0 2 2h4m-6 4.889c0-.491.398-.889.889-.889h.444c.752 0 1.456.528 1.778 1.333c.308.77.308 1.47 0 1.778a.943.943 0 0 0 0 1.333l.889.89a.943.943 0 0 0 1.333 0c.285-.285.765-.445 1.334-.445h.444c.491 0 .889.796.889 1.778v.444a.89.89 0 0 1-.889.889A7.11 7.11 0 0 1 13 13.889");
}
</style><path class="ll0-8pbyt"/>`,
		"fallback": "coolicons:file-phone-corner-round",
	});
}

export default Component;
