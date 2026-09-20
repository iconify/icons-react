import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/avw7e7kpf.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="avw7e7kpf"/>`,
		"fallback": "selfhst:humble-bundle-dark",
	});
}

export default Component;
