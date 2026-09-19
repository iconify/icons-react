import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xlv8u-u-t.css';
import '../../css/a/aso8_oe6o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="xlv8u-u-t"/><path class="aso8_oe6o"/>`,
		"fallback": "bitcoin-icons:alert-filled",
	});
}

export default Component;
