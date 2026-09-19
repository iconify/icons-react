import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mu2ew0b3x.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mu2ew0b3x"/>`,
		"fallback": "fluent-mdl2:diff-inline",
	});
}

export default Component;
