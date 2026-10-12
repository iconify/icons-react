import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/r6fz4cbaf.css';
import '../../css/w/wvjpim6nj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="r6fz4cbaf"/><path class="wvjpim6nj"/>`,
		"fallback": "lucide-extended:image-off-filled",
	});
}

export default Component;
