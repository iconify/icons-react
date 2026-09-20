import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/nkj12ubkl.css';
import '../../css/f/fbnpwsodw.css';
import '../../css/x/xeitc2b3n.css';
import '../../css/y/yu2ef9i5k.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="nkj12ubkl"/><circle class="fbnpwsodw"/><path class="xeitc2b3n"/><circle class="yu2ef9i5k"/></g>`,
		"fallback": "tdesign:image",
	});
}

export default Component;
