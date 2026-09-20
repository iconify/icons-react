import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m4_xreixv.css';
import '../../css/t/te4hkcb5h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m4_xreixv"/><path class="te4hkcb5h"/>`,
		"fallback": "octicon:file-moved-24",
	});
}

export default Component;
