import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sefj0onvx.css';
import '../../css/j/j5chjyltn.css';
import '../../css/c/c8rlrik4k.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="sefj0onvx"/><path clip-rule="evenodd" class="j5chjyltn"/><path class="c8rlrik4k"/></g>`,
		"fallback": "streamline-color:database-refresh-flat",
	});
}

export default Component;
