import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md_qbl-6h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="md_qbl-6h"/>`,
		"fallback": "solar:banknote-outline",
	});
}

export default Component;
