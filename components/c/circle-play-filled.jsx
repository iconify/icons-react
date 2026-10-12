import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ud2z5r7ki.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ud2z5r7ki"/>`,
		"fallback": "lucide-extended:circle-play-filled",
	});
}

export default Component;
