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
		"content": `<style>.muc6cn9uq {
  fill: currentColor;
  d: path("m8.793 12.414l-1.44 1.44a.5.5 0 0 1-.707 0l-1.439-1.44a.5.5 0 0 1 .707-.707l.586.586V8.5A.5.5 0 0 1 7 8h2.5V5.5a.5.5 0 0 1 1 0V8H13a.5.5 0 0 1 .5.5v3.793l.586-.586a.5.5 0 0 1 .707.707l-1.44 1.44a.5.5 0 0 1-.707 0l-1.439-1.44a.5.5 0 0 1 .707-.707l.586.586V9h-5v3.293l.586-.586a.5.5 0 1 1 .707.707M10 18a8 8 0 1 0 0-16a8 8 0 0 0 0 16m7-8a7 7 0 1 1-14 0a7 7 0 0 1 14 0");
}
</style><path class="muc6cn9uq"/>`,
		"fallback": "fluent:arrow-circle-down-split-20-regular",
	});
}

export default Component;
