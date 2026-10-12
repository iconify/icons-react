import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sdgvfq0gt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sdgvfq0gt"/>`,
		"fallback": "lucide-extended:engine-filled",
	});
}

export default Component;
