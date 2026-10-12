import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lg86vcuii.css';
import '../../css/c/c-xbtmutf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lg86vcuii"/><path clip-rule="evenodd" class="c-xbtmutf"/>`,
		"fallback": "lucide-extended:germ-filled",
	});
}

export default Component;
