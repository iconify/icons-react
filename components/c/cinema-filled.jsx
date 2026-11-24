import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z317gjqgd.css';
import '../../css/f/ftpvooboq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z317gjqgd"/><path clip-rule="evenodd" class="ftpvooboq"/>`,
		"fallback": "lucide-extended:cinema-filled",
	});
}

export default Component;
