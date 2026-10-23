import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lh-7vl_5b.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lh-7vl_5b"/>`,
		"fallback": "lucide-extended:circle-chevrons-left-filled",
	});
}

export default Component;
