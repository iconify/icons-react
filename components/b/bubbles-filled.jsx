import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s176rmg_i.css';
import '../../css/r/rg-7atbag.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s176rmg_i"/><path class="rg-7atbag"/>`,
		"fallback": "lucide-extended:bubbles-filled",
	});
}

export default Component;
