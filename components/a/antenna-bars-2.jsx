import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr4e52byc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr4e52byc"/>`,
		"fallback": "tabler:antenna-bars-2",
	});
}

export default Component;
