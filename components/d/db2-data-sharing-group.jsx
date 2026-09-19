import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qnpn7ob-y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qnpn7ob-y"/>`,
		"fallback": "carbon:db2-data-sharing-group",
	});
}

export default Component;
