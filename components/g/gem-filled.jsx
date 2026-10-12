import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hyue1vbef.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hyue1vbef"/>`,
		"fallback": "lucide-extended:gem-filled",
	});
}

export default Component;
