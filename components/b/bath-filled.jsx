import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iiw79xjwx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iiw79xjwx"/>`,
		"fallback": "lucide-extended:bath-filled",
	});
}

export default Component;
