import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue0oukb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ue0oukb9r"/>`,
		"fallback": "thesvg:google-keep",
	});
}

export default Component;
