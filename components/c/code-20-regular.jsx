import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.zy9zy6bth {
  fill: currentColor;
  d: path("M12.967 3.68a.5.5 0 0 0-.934-.36l-5 13a.5.5 0 1 0 .934.36zM5.825 6.12a.5.5 0 0 1 .055.706L3.159 10l2.72 3.175a.5.5 0 0 1-.759.65l-3-3.5a.5.5 0 0 1 0-.65l3-3.5a.5.5 0 0 1 .705-.054m8.35 8.26a.5.5 0 0 1-.055-.705l2.722-3.175l-2.722-3.174a.5.5 0 1 1 .76-.651l3 3.5a.5.5 0 0 1 0 .65l-3 3.5a.5.5 0 0 1-.705.055");
}
</style><path class="zy9zy6bth"/>`,
		"fallback": "fluent:code-20-regular",
	});
}

export default Component;
