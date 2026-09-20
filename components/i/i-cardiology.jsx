import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/ms1ycbcfl.css';
import '../../css/l/ln5q-fheg.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ms1ycbcfl"/><path class="ln5q-fheg"/>`,
		"fallback": "medical-icon:i-cardiology",
	});
}

export default Component;
