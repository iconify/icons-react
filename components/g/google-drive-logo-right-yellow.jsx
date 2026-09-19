import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mefck68qi.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mefck68qi"/>`,
		"fallback": "fluent-mdl2:google-drive-logo-right-yellow",
	});
}

export default Component;
