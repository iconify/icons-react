import { Icon } from '@iconify/css-react';
import { createElement } from 'react';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<style>.jyo12bpqb {
  cx: 18px;
  cy: 18px;
  r: 18px;
  fill: var(--svg-color--c1694f, #c1694f);
}
</style><circle class="jyo12bpqb"/>`,
		"fallback": "twemoji:brown-circle",
	});
}

export default Component;
