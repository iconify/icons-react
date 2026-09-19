import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vqkk9sb9t.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vqkk9sb9t"/>`,
		"fallback": "fluent-mdl2:download",
	});
}

export default Component;
