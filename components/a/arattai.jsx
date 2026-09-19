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
		"content": `<style>.dre2t3b4h {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 8.994v30.475M11.982 15.94V8.531h21.889v30.054l-7.387-3.031H5.5V22.21h16.922");
}
</style><path class="dre2t3b4h"/>`,
		"fallback": "arcticons:arattai",
	});
}

export default Component;
