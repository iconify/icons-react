import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iysmunbtr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iysmunbtr"/>`,
		"fallback": "lucide-extended:align-start-vertical-filled",
	});
}

export default Component;
