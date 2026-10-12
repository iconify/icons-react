import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sozdzcb0a.css';
import '../../css/r/ris-r3boe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sozdzcb0a"/><path clip-rule="evenodd" class="ris-r3boe"/>`,
		"fallback": "lucide-extended:chart-bar-stacked-filled",
	});
}

export default Component;
