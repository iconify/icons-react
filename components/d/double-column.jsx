import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg9io8bkg.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg9io8bkg"/>`,
		"fallback": "fluent-mdl2:double-column",
	});
}

export default Component;
