import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jqn_rxbsq.css';
import '../../css/m/mq1ufp71u.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jqn_rxbsq"/><path class="mq1ufp71u"/>`,
		"fallback": "vaadin:controller",
	});
}

export default Component;
