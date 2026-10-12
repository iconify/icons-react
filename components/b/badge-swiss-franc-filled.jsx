import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r-585ybje.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r-585ybje"/>`,
		"fallback": "lucide-extended:badge-swiss-franc-filled",
	});
}

export default Component;
