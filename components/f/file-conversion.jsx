import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/km1zm6hiv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="km1zm6hiv"/>`,
		"fallback": "icon-park-outline:file-conversion",
	});
}

export default Component;
