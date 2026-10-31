import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vnkp_xh6x.css';
import '../../css/t/tkd7msb-v.css';
import '../../css/z/z1kmvobcf.css';
import '../../css/a/a73ygh56a.css';
import '../../css/j/j55m_-bae.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="vnkp_xh6x wm-shadow"/><path class="tkd7msb-v wm-shadow"/><path class="z1kmvobcf"/><path class="a73ygh56a"/><path class="j55m_-bae"/></g>`,
		"fallback": "withicons-brutal:folder-tree",
	});
}

export default Component;
