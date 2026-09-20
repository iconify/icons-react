import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mdt0fxxjm.css';

const viewBox = {"width":22,"height":22};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mdt0fxxjm"/>`,
		"fallback": "memory:format-text-multiline",
	});
}

export default Component;
