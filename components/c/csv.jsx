import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hw4tx68rp.css';
import '../../css/r/rqc7mdb1v.css';
import '../../css/c/cpgwot4ac.css';
import '../../css/v/v8ai3lb5n.css';

const viewBox = {"width":40,"height":40};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hw4tx68rp"/><path class="rqc7mdb1v"/><path class="cpgwot4ac"/><path class="v8ai3lb5n"/>`,
		"fallback": "iwwa:csv",
	});
}

export default Component;
