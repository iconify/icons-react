import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1m2l6bpb.css';

const viewBox = {"width":26,"height":26};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1m2l6bpb"/>`,
		"fallback": "wpf:details",
	});
}

export default Component;
