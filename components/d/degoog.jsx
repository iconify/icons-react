import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fzo4-zvud.css';
import '../../css/l/l9qwqibqt.css';
import '../../css/t/t62queb9q.css';
import '../../css/t/txm16xbzp.css';
import '../../css/x/x0xrrrbgm.css';
import '../../css/x/x1e_6_58s.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fzo4-zvud"/><path class="l9qwqibqt"/><path class="t62queb9q"/><path class="txm16xbzp"/><path class="x0xrrrbgm"/><path class="x1e_6_58s"/>`,
		"fallback": "selfhst:degoog",
	});
}

export default Component;
