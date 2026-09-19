import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fcwlsyg8s.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fcwlsyg8s"/>`,
		"fallback": "healthicons:blister-pills-round-x16",
	});
}

export default Component;
