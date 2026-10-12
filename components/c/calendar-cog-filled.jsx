import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s-dh3gkit.css';
import '../../css/d/d8g489bns.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="s-dh3gkit"/><path class="d8g489bns"/>`,
		"fallback": "lucide-extended:calendar-cog-filled",
	});
}

export default Component;
