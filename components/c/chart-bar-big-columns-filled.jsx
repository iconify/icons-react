import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zv82l7bbi.css';
import '../../css/o/ob530gbzg.css';
import '../../css/g/g8n8bnbwu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zv82l7bbi"/><rect class="ob530gbzg"/><rect class="g8n8bnbwu"/>`,
		"fallback": "boxicons:chart-bar-big-columns-filled",
	});
}

export default Component;
