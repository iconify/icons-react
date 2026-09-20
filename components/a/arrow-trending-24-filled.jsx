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
		"content": `<style>.apk5ksbpc {
  fill: currentColor;
  d: path("M14.003 5.5H21a1 1 0 0 1 .993.883L22 6.5v7a1 1 0 0 1-1.994.117L20 13.5l-.001-4.586l-7.292 7.293a1 1 0 0 1-1.32.084l-.094-.083l-2.296-2.292l-5.288 5.29a1 1 0 0 1-1.497-1.32l.083-.095l5.994-5.996a1 1 0 0 1 1.32-.084l.094.083l2.296 2.292L18.584 7.5h-4.581a1 1 0 0 1-.993-.883l-.007-.117a1 1 0 0 1 .883-.993zH21z");
}
</style><path class="apk5ksbpc"/>`,
		"fallback": "fluent:arrow-trending-24-filled",
	});
}

export default Component;
