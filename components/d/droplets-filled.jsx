import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jjc5x9bqo.css';
import '../../css/o/oevx49bdw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jjc5x9bqo"/><path class="oevx49bdw"/>`,
		"fallback": "lucide-extended:droplets-filled",
	});
}

export default Component;
