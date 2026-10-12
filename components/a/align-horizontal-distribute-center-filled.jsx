import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr8ptachn.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr8ptachn"/>`,
		"fallback": "lucide-extended:align-horizontal-distribute-center-filled",
	});
}

export default Component;
