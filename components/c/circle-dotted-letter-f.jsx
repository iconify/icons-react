import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/of7chwb7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="of7chwb7q"/>`,
		"fallback": "tabler:circle-dotted-letter-f",
	});
}

export default Component;
