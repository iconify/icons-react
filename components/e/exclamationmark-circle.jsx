import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w5sw13noc.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="w5sw13noc"/>`,
		"fallback": "f7:exclamationmark-circle",
	});
}

export default Component;
