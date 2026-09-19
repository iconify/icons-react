import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/loga5ub-f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="loga5ub-f"/>`,
		"fallback": "cbi:grill-charcoal",
	});
}

export default Component;
