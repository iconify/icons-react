import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/miq8s0bsn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="miq8s0bsn"/>`,
		"fallback": "withicons:file-json-solid",
	});
}

export default Component;
