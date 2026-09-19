import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qs39i-btx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qs39i-btx"/>`,
		"fallback": "fluent-mdl2:google-drive-logo",
	});
}

export default Component;
