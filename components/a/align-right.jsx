import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in2o_h8de.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="in2o_h8de"/>`,
		"fallback": "streamline-plump:align-right",
	});
}

export default Component;
