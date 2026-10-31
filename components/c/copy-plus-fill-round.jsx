import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/taf--bs9f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="taf--bs9f"/>`,
		"fallback": "coolicons:copy-plus-fill-round",
	});
}

export default Component;
