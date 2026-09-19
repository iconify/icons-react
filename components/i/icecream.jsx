import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fclu4vwav.css';
import '../../css/l/ls3-jzb9e.css';
import '../../css/c/ckj4a4gpf.css';
import '../../css/y/yfvylybuc.css';
import '../../css/y/ytkr-qz2l.css';
import '../../css/w/wc-yv6b2x.css';

const viewBox = {"width":46,"height":98.85};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fclu4vwav"/><path class="ls3-jzb9e"/><path class="ckj4a4gpf"/><path class="yfvylybuc"/><path class="ytkr-qz2l"/><path class="wc-yv6b2x"/>`,
		"fallback": "flat-ui:icecream",
	});
}

export default Component;
