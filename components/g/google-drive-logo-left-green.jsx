import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v0_psbcgx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v0_psbcgx"/>`,
		"fallback": "fluent-mdl2:google-drive-logo-left-green",
	});
}

export default Component;
