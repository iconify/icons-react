import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hgvtg0iqd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hgvtg0iqd"/>`,
		"fallback": "iconaut:file-down-solid",
	});
}

export default Component;
