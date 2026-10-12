import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/geperfx7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="geperfx7v"/>`,
		"fallback": "lucide-extended:cctv-filled",
	});
}

export default Component;
