import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j8k8jpgoq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="j8k8jpgoq"/>`,
		"fallback": "lucide-extended:handbag-filled",
	});
}

export default Component;
