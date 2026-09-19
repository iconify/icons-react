import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kuksoeboz.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kuksoeboz"/>`,
		"fallback": "f7:divide-circle",
	});
}

export default Component;
