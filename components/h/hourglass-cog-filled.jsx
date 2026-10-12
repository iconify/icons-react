import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sa0f-6aya.css';
import '../../css/l/l6ma61byl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sa0f-6aya"/><path clip-rule="evenodd" class="l6ma61byl"/>`,
		"fallback": "lucide-extended:hourglass-cog-filled",
	});
}

export default Component;
