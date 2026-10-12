import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/th4v1wbjr.css';
import '../../css/q/qydmu93ss.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="th4v1wbjr"/><path class="qydmu93ss"/>`,
		"fallback": "lucide-extended:graduation-cap-filled",
	});
}

export default Component;
