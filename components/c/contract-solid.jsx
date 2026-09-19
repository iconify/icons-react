import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3mgh8bpn.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3mgh8bpn"/>`,
		"fallback": "clarity:contract-solid",
	});
}

export default Component;
