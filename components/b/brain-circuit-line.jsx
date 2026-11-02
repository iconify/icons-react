import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ol4q83bpe.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ol4q83bpe"/>`,
		"fallback": "mingcute:brain-circuit-line",
	});
}

export default Component;
