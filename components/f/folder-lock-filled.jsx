import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n913frb6j.css';
import '../../css/o/oxtj35b7v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="n913frb6j"/><path class="oxtj35b7v"/>`,
		"fallback": "lucide-extended:folder-lock-filled",
	});
}

export default Component;
