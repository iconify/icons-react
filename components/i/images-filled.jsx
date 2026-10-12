import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjmqsobna.css';
import '../../css/n/nlx7eybis.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjmqsobna"/><path clip-rule="evenodd" class="nlx7eybis"/>`,
		"fallback": "lucide-extended:images-filled",
	});
}

export default Component;
