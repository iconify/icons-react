import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fob53hk2v.css';
import '../../css/t/t2f6tacfc.css';
import '../../css/w/ww2udeb7u.css';
import '../../css/u/u7p-4csqq.css';
import '../../css/r/rspxhd8_u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fob53hk2v"/><path clip-rule="evenodd" class="t2f6tacfc"/><path clip-rule="evenodd" class="ww2udeb7u"/><path clip-rule="evenodd" class="u7p-4csqq"/><path clip-rule="evenodd" class="rspxhd8_u"/>`,
		"fallback": "cuida:expand-outline",
	});
}

export default Component;
