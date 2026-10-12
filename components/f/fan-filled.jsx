import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fh5rds2bt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fh5rds2bt"/>`,
		"fallback": "lucide-extended:fan-filled",
	});
}

export default Component;
