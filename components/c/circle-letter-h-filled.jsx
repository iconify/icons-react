import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xx_tyabpq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="xx_tyabpq"/>`,
		"fallback": "lucide-extended:circle-letter-h-filled",
	});
}

export default Component;
