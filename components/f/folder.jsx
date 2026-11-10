import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c__irb41u.css';
import '../../css/i/inl8pxgjl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="c__irb41u"/><path class="inl8pxgjl"/></g>`,
		"fallback": "andrsrxn:folder",
	});
}

export default Component;
