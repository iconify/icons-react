import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e_s-s2rgw.css';
import '../../css/t/te525ybvr.css';
import '../../css/i/ih6yu9j5y.css';
import '../../css/t/tnnhe8b8y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e_s-s2rgw"/><path class="te525ybvr"/><path class="ih6yu9j5y"/><path class="tnnhe8b8y"/>`,
		"fallback": "cil:fingerprint",
	});
}

export default Component;
