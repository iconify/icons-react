import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pe78kyb0a.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pe78kyb0a"/>`,
		"fallback": "fluent-mdl2:hide-2",
	});
}

export default Component;
