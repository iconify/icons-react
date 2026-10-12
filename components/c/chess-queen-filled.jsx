import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/grrye6bcq.css';
import '../../css/k/k2cjj6b0a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="grrye6bcq"/><path clip-rule="evenodd" class="k2cjj6b0a"/>`,
		"fallback": "lucide-extended:chess-queen-filled",
	});
}

export default Component;
