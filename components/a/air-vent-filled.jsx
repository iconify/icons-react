import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o8gghnbuu.css';
import '../../css/x/xhxzdg_-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o8gghnbuu"/><path clip-rule="evenodd" class="xhxzdg_-s"/>`,
		"fallback": "lucide-extended:air-vent-filled",
	});
}

export default Component;
