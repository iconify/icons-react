import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a0m25c.css';
import '../../css/k/kscc-z.css';
import '../../css/m/m1gu2s.css';
import '../../css/n/neinwl.css';
import '../../css/s/so-from-60.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="a0m25c kscc-z"/><path class="a0m25c m1gu2s"/><path class="a0m25c neinwl"/>`,
		"fallback": "line-md:alert",
	});
}

export default Component;
