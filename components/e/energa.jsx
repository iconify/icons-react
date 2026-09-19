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
		"content": `<style>.xhp3rhb2q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m16.427 41.466l11.379-18.157c3.365-5.67 1.872-13.406-2.784-18.319a1.59 1.59 0 0 0-2.367.082C19.226 9.181 8.902 22.078 8.902 28.402C8.902 36.741 15.662 43.5 24 43.5s15.098-6.76 15.098-15.098c0-5.124-3.585-8.995-5.667-10.811c-.737-.643-1.874-.453-2.385.381l-4.317 7.055m-2.982 4.726l7.373 11.955");
}
</style><path class="xhp3rhb2q"/>`,
		"fallback": "arcticons:energa",
	});
}

export default Component;
