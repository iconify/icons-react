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
		"content": `<style>.zgs1zsodr {
  fill: currentColor;
  d: path("M11.293 6.709Q11 6.418 11 6.002t.291-.709t.707-.293t.709.291t.293.707t-.291.709t-.707.293t-.709-.291m0 12Q11 18.418 11 18.002t.291-.709t.707-.293t.709.291t.293.707t-.291.709t-.707.293t-.709-.291");
}
</style><path class="zgs1zsodr"/>`,
		"fallback": "material-symbols-light:go-to-line-rounded",
	});
}

export default Component;
