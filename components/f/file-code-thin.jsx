import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.a8a5yxcgg {
  fill: currentColor;
  d: path("M178.83 149.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L170.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66Zm-72-24a4 4 0 0 0-5.66 0l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 1 0 5.66-5.66L85.66 152l21.17-21.17a4 4 0 0 0 0-5.66M212 88v128a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Zm48 132V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4");
}
</style><path class="a8a5yxcgg"/>`,
		"fallback": "ph:file-code-thin",
	});
}

export default Component;
