import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/p0yn9qbkq.css';
import '../../css/s/s86mizbgb.css';
import '../../css/e/ejqsmfboo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="p0yn9qbkq"/><path class="s86mizbgb"/><path class="ejqsmfboo"/>`,
		"fallback": "streamline-ultimate:database-1-bold",
	});
}

export default Component;
