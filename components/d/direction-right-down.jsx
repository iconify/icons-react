import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/puatqp2zi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="puatqp2zi"/>`,
		"fallback": "codex:direction-right-down",
	});
}

export default Component;
