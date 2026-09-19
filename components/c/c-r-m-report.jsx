import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mad4ckb8u.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mad4ckb8u"/>`,
		"fallback": "fluent-mdl2:c-r-m-report",
	});
}

export default Component;
