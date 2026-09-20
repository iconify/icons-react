import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbn6zo7il.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbn6zo7il"/>`,
		"fallback": "map:convenience-store",
	});
}

export default Component;
