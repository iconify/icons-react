import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/ln20xme9d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ln20xme9d"/>`,
		"fallback": "mynaui:chart-no-axes-combined-solid",
	});
}

export default Component;
