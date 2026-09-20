import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i1e8wfblg.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="i1e8wfblg"/>`,
		"fallback": "teenyicons:envelope-open-outline",
	});
}

export default Component;
