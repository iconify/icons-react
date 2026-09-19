import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gicopp7ns.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gicopp7ns"/>`,
		"fallback": "fluent-emoji-flat:club-suit",
	});
}

export default Component;
