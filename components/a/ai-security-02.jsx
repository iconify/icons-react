import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/v/va98u3skl.css';
import '../../css/l/l6tifibiq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="va98u3skl"/><path class="l6tifibiq"/></g>`,
		"fallback": "hugeicons:ai-security-02",
	});
}

export default Component;
