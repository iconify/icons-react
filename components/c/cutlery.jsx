import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aitpvr66y.css';

const viewBox = {"width":328,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aitpvr66y"/>`,
		"fallback": "ps:cutlery",
	});
}

export default Component;
