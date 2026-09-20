import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/odgrk3hlp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="odgrk3hlp"/>`,
		"fallback": "solar:file-corrupted-outline",
	});
}

export default Component;
