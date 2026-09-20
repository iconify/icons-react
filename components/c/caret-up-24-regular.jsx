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
		"content": `<style>.ecjt37v7p {
  fill: currentColor;
  d: path("M5.161 14.907c-.707.809-.133 2.073.941 2.073h11.796c1.074 0 1.648-1.264.941-2.073l-5.522-6.31a1.75 1.75 0 0 0-2.634 0zm1.492.573l5.159-5.896a.25.25 0 0 1 .376 0l5.16 5.897z");
}
</style><path class="ecjt37v7p"/>`,
		"fallback": "fluent:caret-up-24-regular",
	});
}

export default Component;
