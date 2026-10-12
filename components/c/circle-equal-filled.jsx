import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lmps9kb7w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lmps9kb7w"/>`,
		"fallback": "lucide-extended:circle-equal-filled",
	});
}

export default Component;
