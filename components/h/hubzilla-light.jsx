import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bv8hv5_7k.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bv8hv5_7k"/>`,
		"fallback": "selfhst:hubzilla-light",
	});
}

export default Component;
