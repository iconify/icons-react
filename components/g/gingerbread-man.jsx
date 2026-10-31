import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/n/n-7cw7b1t.css';
import '../../css/p/pau5b2f0a.css';
import '../../css/z/zbp8r9b5n.css';
import '../../css/c/cvzi6sbks.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="n-7cw7b1t wm-shadow"/><path class="pau5b2f0a wm-shadow"/><path class="zbp8r9b5n"/><path class="cvzi6sbks"/></g>`,
		"fallback": "withicons-brutal:gingerbread-man",
	});
}

export default Component;
