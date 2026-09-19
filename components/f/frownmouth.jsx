import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h32t530tv.css';
import '../../css/n/n9cednr3v.css';
import '../../css/z/zz3r-kvxb.css';
import '../../css/s/sdn9s7bhc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="h32t530tv"/><path class="n9cednr3v"/><path class="zz3r-kvxb"/><path class="sdn9s7bhc"/>`,
		"fallback": "fxemoji:frownmouth",
	});
}

export default Component;
