import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eoz6ct8xw.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eoz6ct8xw"/>`,
		"fallback": "fluent-mdl2:hexadite-investigation-cancel",
	});
}

export default Component;
