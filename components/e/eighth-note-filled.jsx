import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qtq1wfort.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qtq1wfort"/>`,
		"fallback": "lucide-extended:eighth-note-filled",
	});
}

export default Component;
