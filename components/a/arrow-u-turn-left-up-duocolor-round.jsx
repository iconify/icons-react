import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/amim8fd2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="amim8fd2o"/>`,
		"fallback": "coolicons:arrow-u-turn-left-up-duocolor-round",
	});
}

export default Component;
