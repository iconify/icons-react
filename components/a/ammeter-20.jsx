import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e8zyk_juu.css';
import '../../css/r/rh_8cbdbx.css';
import '../../css/w/wcr2m1pdr.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e8zyk_juu"/><path class="rh_8cbdbx"/><path class="wcr2m1pdr"/>`,
		"fallback": "energy-icons:ammeter-20",
	});
}

export default Component;
