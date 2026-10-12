import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lrq6b7p1a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lrq6b7p1a"/>`,
		"fallback": "lucide-extended:align-vertical-distribute-end-filled",
	});
}

export default Component;
