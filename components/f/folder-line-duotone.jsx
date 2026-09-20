import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/juolcjavn.css';
import '../../css/i/i4kly5b8q.css';
import '../../css/l/laly9hbhu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="juolcjavn"/><path class="i4kly5b8q"/><path class="laly9hbhu"/>`,
		"fallback": "lets-icons:folder-line-duotone",
	});
}

export default Component;
