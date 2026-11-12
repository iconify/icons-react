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
		"content": `<style>.b6go78mri {
  fill: currentColor;
  d: path("M20 8.25C20.4142 8.25 20.75 8.58579 20.75 9C20.75 9.41421 20.4142 9.75 20 9.75H4C3.58579 9.75 3.25 9.41421 3.25 9C3.25 8.58579 3.58579 8.25 4 8.25H20Z");
}

.kwtjw9bdm {
  fill: currentColor;
  d: path("M20 14.25C20.4142 14.25 20.75 14.5858 20.75 15C20.75 15.4142 20.4142 15.75 20 15.75H4C3.58579 15.75 3.25 15.4142 3.25 15C3.25 14.5858 3.58579 14.25 4 14.25H20Z");
  opacity: var(--svg-opacity--0-5, 0.5);
}
</style><path class="kwtjw9bdm"/><path class="b6go78mri"/>`,
		"fallback": "solar:equal-bold-duotone",
	});
}

export default Component;
