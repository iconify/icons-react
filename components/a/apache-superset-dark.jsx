import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wff71wb4h.css';
import '../../css/e/ek_fw-biv.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wff71wb4h"/><path class="ek_fw-biv"/>`,
		"fallback": "selfhst:apache-superset-dark",
	});
}

export default Component;
