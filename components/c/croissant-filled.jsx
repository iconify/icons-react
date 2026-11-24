import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/ts7g1fbqu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ts7g1fbqu"/>`,
		"fallback": "lucide-extended:croissant-filled",
	});
}

export default Component;
