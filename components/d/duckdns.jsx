import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zg7ugbc9u.css';
import '../../css/k/k9yprybcj.css';
import '../../css/u/ubzucrd0s.css';
import '../../css/f/frg4d254j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zg7ugbc9u"/><path class="k9yprybcj"/><path class="ubzucrd0s"/><path class="frg4d254j"/>`,
		"fallback": "selfhst:duckdns",
	});
}

export default Component;
