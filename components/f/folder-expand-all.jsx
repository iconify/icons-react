import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pxtfc9b1w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pxtfc9b1w"/>`,
		"fallback": "ix:folder-expand-all",
	});
}

export default Component;
