import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g9nwk9bcv.css';
import '../../css/u/u42idu8ag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="g9nwk9bcv"/><path class="u42idu8ag"/>`,
		"fallback": "boxicons:gallery-vertical-end-filled",
	});
}

export default Component;
