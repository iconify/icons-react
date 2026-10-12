import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzw7y8bwi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lzw7y8bwi"/>`,
		"fallback": "lucide-extended:face-slightly-smiling-filled",
	});
}

export default Component;
