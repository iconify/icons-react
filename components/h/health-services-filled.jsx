import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hd6fsacyv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hd6fsacyv"/>`,
		"fallback": "griddy-icons:health-services-filled",
	});
}

export default Component;
