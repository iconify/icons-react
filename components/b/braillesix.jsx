import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/za6id5nae.css';

const viewBox = {"width":768,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="za6id5nae"/>`,
		"fallback": "whh:braillesix",
	});
}

export default Component;
