import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iw1iew.css';
import '../../css/y/ysxzor.css';
import '../../css/s/sqpi1o.css';
import '../../css/y/y4wbml.css';
import '../../css/n/neinwl.css';
import '../../css/f/fill-to-0.css';
import '../../css/s/so-from-60.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iw1iew ysxzor"/><path class="iw1iew sqpi1o y4wbml"/><path class="iw1iew neinwl y4wbml"/>`,
		"fallback": "line-md:alert-circle-twotone",
	});
}

export default Component;
