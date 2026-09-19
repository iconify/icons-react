import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ehs20_byg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ehs20_byg"/>`,
		"fallback": "fluent-mdl2:connect-contacts",
	});
}

export default Component;
