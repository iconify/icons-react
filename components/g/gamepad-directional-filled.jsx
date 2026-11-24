import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/agcksgo7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="agcksgo7q"/>`,
		"fallback": "lucide-extended:gamepad-directional-filled",
	});
}

export default Component;
