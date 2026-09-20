import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ajetd_nem.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ajetd_nem"/>`,
		"fallback": "keyline-icons:bar-chart-2-horizontal-start",
	});
}

export default Component;
