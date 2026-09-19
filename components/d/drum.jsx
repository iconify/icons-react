import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wrx5y-pzi.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wrx5y-pzi"/>`,
		"fallback": "fa-solid:drum",
	});
}

export default Component;
