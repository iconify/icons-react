import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qjh1bacdq.css';

const viewBox = {"width":16,"height":17};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qjh1bacdq"/>`,
		"fallback": "si-glyph:hardware",
	});
}

export default Component;
