import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n2tawacsc.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n2tawacsc"/>`,
		"fallback": "fluent-mdl2:accounts",
	});
}

export default Component;
