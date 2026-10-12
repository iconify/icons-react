import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r5p8p1b5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r5p8p1b5w"/>`,
		"fallback": "lucide-extended:forklift-filled",
	});
}

export default Component;
