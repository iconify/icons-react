import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sao3gljiv.css';
import '../../css/a/agnu50b8j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sao3gljiv"/><path class="agnu50b8j"/>`,
		"fallback": "selfhst:connectwise-brightgauge",
	});
}

export default Component;
