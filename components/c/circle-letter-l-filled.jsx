import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jgotu1bxw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jgotu1bxw"/>`,
		"fallback": "lucide-extended:circle-letter-l-filled",
	});
}

export default Component;
