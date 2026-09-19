import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yo4ywkbmv.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yo4ywkbmv"/>`,
		"fallback": "fluent-mdl2:hexadite-investigation-semi-auto",
	});
}

export default Component;
