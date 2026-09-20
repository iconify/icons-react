import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/swysq6bsj.css';
import '../../css/o/ooafgvbkg.css';
import '../../css/w/w7x-q8b5f.css';
import '../../css/q/qt15abc2v.css';
import '../../css/p/p93clnbll.css';
import '../../css/l/l1ni_cclx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="swysq6bsj"/><path class="ooafgvbkg"/><path class="w7x-q8b5f"/><path class="qt15abc2v"/><path class="p93clnbll"/><path class="l1ni_cclx"/>`,
		"fallback": "token:cgg",
	});
}

export default Component;
