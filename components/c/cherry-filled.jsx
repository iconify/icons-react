import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z1xe-euqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="z1xe-euqf"/>`,
		"fallback": "lucide-extended:cherry-filled",
	});
}

export default Component;
