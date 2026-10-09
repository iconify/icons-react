import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fec4cjbkq.css';
import '../../css/x/xu4qvpb9q.css';
import '../../css/s/sb_orefnl.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fec4cjbkq"/><path class="xu4qvpb9q"/><path class="sb_orefnl"/>`,
		"fallback": "energy-icons:arrow-down-square-20-bold",
	});
}

export default Component;
