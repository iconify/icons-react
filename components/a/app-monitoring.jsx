import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i5mxzlskq.css';
import '../../css/j/jgw_zob1f.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i5mxzlskq"/><path class="jgw_zob1f ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-monitoring",
	});
}

export default Component;
