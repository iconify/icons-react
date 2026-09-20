import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nr1zambkh.css';
import '../../css/t/t577b5n6f.css';
import '../../css/d/d6n3akbru.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nr1zambkh"/><path class="t577b5n6f"/><path class="d6n3akbru"/></g>`,
		"fallback": "tdesign:file-markdown",
	});
}

export default Component;
