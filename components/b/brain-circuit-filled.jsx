import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qw8a2j_zu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qw8a2j_zu"/>`,
		"fallback": "lucide-extended:brain-circuit-filled",
	});
}

export default Component;
