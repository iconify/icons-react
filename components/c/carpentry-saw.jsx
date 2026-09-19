import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hjh7xxbyb.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hjh7xxbyb"/>`,
		"fallback": "fluent-emoji-high-contrast:carpentry-saw",
	});
}

export default Component;
