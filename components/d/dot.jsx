import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u1_txq_7t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="u1_txq_7t"/>`,
		"fallback": "lucide:dot",
	});
}

export default Component;
