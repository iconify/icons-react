import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x-brn9h0g.css';
import '../../css/k/kceoj0bsx.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x-brn9h0g"/><path class="kceoj0bsx"/>`,
		"fallback": "selfhst:centos-light",
	});
}

export default Component;
