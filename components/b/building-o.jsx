import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n68h89odk.css';

const viewBox = {"width":1408,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n68h89odk"/>`,
		"fallback": "fa:building-o",
	});
}

export default Component;
