import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rv0s7yb0o.css';
import '../../css/d/da9g56non.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="rv0s7yb0o"/><path class="da9g56non"/>`,
		"fallback": "selfhst:hetzner",
	});
}

export default Component;
