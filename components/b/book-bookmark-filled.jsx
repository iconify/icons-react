import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hnp2z7g5d.css';
import '../../css/x/x-w7n4-xc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="hnp2z7g5d"/><path class="x-w7n4-xc"/>`,
		"fallback": "lucide-extended:book-bookmark-filled",
	});
}

export default Component;
