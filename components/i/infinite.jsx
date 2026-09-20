import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d-90m7y5o.css';

const viewBox = {"width":50,"height":50};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="d-90m7y5o"/>`,
		"fallback": "marketeq:infinite",
	});
}

export default Component;
