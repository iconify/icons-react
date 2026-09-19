import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/scuur4oxh.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="scuur4oxh"/>`,
		"fallback": "fluent-mdl2:header-3",
	});
}

export default Component;
