import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ift36sbxq.css';

const viewBox = {"width":100,"height":100};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ift36sbxq"/>`,
		"fallback": "gis:folder-map",
	});
}

export default Component;
