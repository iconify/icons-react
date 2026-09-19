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
		"content": `<style>.d2rcdzbvq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M14.808 26.692c-5.077-5.076-5.077-13.308 0-18.385c5.076-5.076 13.308-5.076 18.385 0c4.839 4.84 5.065 12.544.68 17.652c-.36.42-.82 1.159-.992 1.684l-.59 1.801a4.14 4.14 0 0 1-3.933 2.851H16.642l12.881 5.603H18.476L27.69 43.5");
}

.w99afpb8g {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 11a6.5 6.5 0 0 1 6.5 6.5");
}
</style><path class="d2rcdzbvq"/><path class="w99afpb8g"/>`,
		"fallback": "arcticons:hello-watt",
	});
}

export default Component;
