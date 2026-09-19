import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x6x4xva_v.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x6x4xva_v"/>`,
		"fallback": "fa:cutlery",
	});
}

export default Component;
