import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iagb11b3o.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iagb11b3o"/>`,
		"fallback": "fa-brands:cc-amex",
	});
}

export default Component;
