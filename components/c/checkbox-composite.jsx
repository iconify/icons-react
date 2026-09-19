import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wsf1rltpp.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wsf1rltpp"/>`,
		"fallback": "fluent-mdl2:checkbox-composite",
	});
}

export default Component;
