import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/if8ou1ogq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="if8ou1ogq"/>`,
		"fallback": "la:file-medical-alt",
	});
}

export default Component;
