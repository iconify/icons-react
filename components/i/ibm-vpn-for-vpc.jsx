import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cyguhx2tf.css';
import '../../css/z/zme4g8b-t.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cyguhx2tf"/><path class="zme4g8b-t"/>`,
		"fallback": "carbon:ibm-vpn-for-vpc",
	});
}

export default Component;
