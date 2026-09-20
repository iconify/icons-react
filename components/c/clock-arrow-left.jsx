import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rj46w8vjb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rj46w8vjb"/>`,
		"fallback": "keyline-icons:clock-arrow-left",
	});
}

export default Component;
