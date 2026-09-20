import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qrde4zxpv.css';
import '../../css/m/m-85-0blw.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qrde4zxpv"/><path class="m-85-0blw"/>`,
		"fallback": "maki:bakery-15",
	});
}

export default Component;
