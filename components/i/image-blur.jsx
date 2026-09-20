import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tkcfz_sfs.css';
import '../../css/m/m7zxn0x7x.css';
import '../../css/g/g974bwrku.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tkcfz_sfs"/><path class="m7zxn0x7x"/><path class="g974bwrku"/></g>`,
		"fallback": "streamline-color:image-blur",
	});
}

export default Component;
