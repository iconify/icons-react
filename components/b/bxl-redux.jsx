import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d0wygnbbs.css';
import '../../css/i/i9jj_iuuz.css';
import '../../css/z/zzj8l2b5u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d0wygnbbs"/><path class="i9jj_iuuz"/><path class="zzj8l2b5u"/>`,
		"fallback": "bx:bxl-redux",
	});
}

export default Component;
