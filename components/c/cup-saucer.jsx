import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ai7oghm0m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ai7oghm0m"/>`,
		"fallback": "lucide-lab:cup-saucer",
	});
}

export default Component;
