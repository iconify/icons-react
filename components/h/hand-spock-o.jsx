import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nst4do0bf.css';

const viewBox = {"width":1920,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nst4do0bf"/>`,
		"fallback": "fa:hand-spock-o",
	});
}

export default Component;
