import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjfi-ebyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gjfi-ebyf"/>`,
		"fallback": "coolicons:bird-fill-round",
	});
}

export default Component;
