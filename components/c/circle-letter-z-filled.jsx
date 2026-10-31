import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gjhi3sj6u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="gjhi3sj6u"/>`,
		"fallback": "lucide-extended:circle-letter-z-filled",
	});
}

export default Component;
