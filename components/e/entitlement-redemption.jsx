import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xiejgtb4p.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xiejgtb4p"/>`,
		"fallback": "fluent-mdl2:entitlement-redemption",
	});
}

export default Component;
