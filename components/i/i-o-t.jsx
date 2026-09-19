import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iar3svb4s.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iar3svb4s"/>`,
		"fallback": "fluent-mdl2:i-o-t",
	});
}

export default Component;
