import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n8p4bpbrl.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n8p4bpbrl"/>`,
		"fallback": "teenyicons:align-text-center-outline",
	});
}

export default Component;
