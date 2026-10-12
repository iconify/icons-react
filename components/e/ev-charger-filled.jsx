import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aftq99syt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="aftq99syt"/>`,
		"fallback": "lucide-extended:ev-charger-filled",
	});
}

export default Component;
