import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sozdzcb0a.css';
import '../../css/t/ttno82btc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sozdzcb0a"/><path class="ttno82btc"/>`,
		"fallback": "lucide-extended:chart-network-filled",
	});
}

export default Component;
