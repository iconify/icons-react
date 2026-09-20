import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ya2ssjs1d.css';
import '../../css/y/yxk_uibgr.css';
import '../../css/q/qxtj0v7jh.css';
import '../../css/w/w72lbhmvq.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ya2ssjs1d"/><path class="yxk_uibgr"/><path class="qxtj0v7jh"/><path class="w72lbhmvq"/>`,
		"fallback": "openmoji:folding-hand-fan",
	});
}

export default Component;
