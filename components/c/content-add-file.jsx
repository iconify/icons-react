import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x9q2oebck.css';
import '../../css/c/cw4dc9bnw.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x9q2oebck"/><path clip-rule="evenodd" class="cw4dc9bnw"/>`,
		"fallback": "streamline-block:content-add-file",
	});
}

export default Component;
