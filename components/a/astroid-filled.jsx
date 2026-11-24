import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q7ud-hb3j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q7ud-hb3j"/>`,
		"fallback": "lucide-extended:astroid-filled",
	});
}

export default Component;
