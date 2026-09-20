import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fw-0snbeq.css';
import '../../css/w/w-hibw8hw.css';
import '../../css/x/xeb9n_bni.css';
import '../../css/v/vux753b6n.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fw-0snbeq"/><path class="ouiIcon__fillSecondary w-hibw8hw"/><path class="xeb9n_bni"/><path class="ouiIcon__fillSecondary vux753b6n"/>`,
		"fallback": "oui:app-dashboard",
	});
}

export default Component;
