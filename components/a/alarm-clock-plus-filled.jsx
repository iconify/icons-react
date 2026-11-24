import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ip_db8b5g.css';
import '../../css/t/tl712yvzu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ip_db8b5g"/><path class="tl712yvzu"/>`,
		"fallback": "lucide-extended:alarm-clock-plus-filled",
	});
}

export default Component;
