import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/plc38_bnb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="plc38_bnb"/>`,
		"fallback": "cib:cc-stripe",
	});
}

export default Component;
