import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xryls9dwx.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xryls9dwx"/>`,
		"fallback": "fluent-mdl2:field-read-only",
	});
}

export default Component;
