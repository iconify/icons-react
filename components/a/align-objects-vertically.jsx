import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t1ywfrbyu.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t1ywfrbyu"/>`,
		"fallback": "ix:align-objects-vertically",
	});
}

export default Component;
