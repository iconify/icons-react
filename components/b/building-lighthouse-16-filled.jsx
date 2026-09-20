import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.yh4a83bhg {
  fill: currentColor;
  d: path("M8.125 1.219a1 1 0 0 0-1.248 0l-2.5 1.996c-.738.59-.322 1.78.623 1.781v2.095a1.75 1.75 0 0 0-1.172 1.396l-.815 5.363A1 1 0 0 0 4 15h6.997a1 1 0 0 0 .989-1.15l-.817-5.363A1.75 1.75 0 0 0 10 7.092V4.996c.945 0 1.364-1.191.625-1.781zM6 7V4.996h3V7zm-1.793 5.646l.232-1.527l5.872-1.631l.214 1.403zM12.5 6h2a.5.5 0 0 0 0-1h-2a.5.5 0 0 0 0 1m1.353-3.854a.5.5 0 0 1 0 .708l-1 1a.5.5 0 1 1-.707-.708l1-1a.5.5 0 0 1 .707 0m0 6a.5.5 0 0 1-.707.708l-1-1a.5.5 0 1 1 .707-.708z");
}
</style><path class="yh4a83bhg"/>`,
		"fallback": "fluent:building-lighthouse-16-filled",
	});
}

export default Component;
