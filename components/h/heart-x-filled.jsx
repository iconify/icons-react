import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zptjmc6mm.css';
import '../../css/v/vb6m8wb7i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zptjmc6mm"/><path class="vb6m8wb7i"/>`,
		"fallback": "lucide-extended:heart-x-filled",
	});
}

export default Component;
