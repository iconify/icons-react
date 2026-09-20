import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu9qfpjil.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu9qfpjil"/>`,
		"fallback": "uil:horizontal-align-left",
	});
}

export default Component;
