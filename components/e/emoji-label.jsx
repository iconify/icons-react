import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.ev71akbhw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.535 11.086L5.5 14.98v18.105l11.035 3.894H42.5V11.02H16.535zM11.018 27.31c-1.818 0-3.246-1.428-3.246-3.245S9.2 20.82 11.018 20.82s3.245 1.428 3.245 3.245s-1.428 3.245-3.246 3.245");
}
</style><path class="ev71akbhw"/>`,
		"fallback": "arcticons:emoji-label",
	});
}

export default Component;
