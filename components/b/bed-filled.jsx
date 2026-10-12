import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ko2focc5a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ko2focc5a"/>`,
		"fallback": "lucide-extended:bed-filled",
	});
}

export default Component;
