import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zsa_eneyf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zsa_eneyf"/>`,
		"fallback": "tabler:arrow-move-left-filled",
	});
}

export default Component;
