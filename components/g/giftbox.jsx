import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zfcvn_bpk.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zfcvn_bpk"/>`,
		"fallback": "fluent-mdl2:giftbox",
	});
}

export default Component;
