import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frkxnd0nd.css';

const viewBox = {"width":596,"height":717};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frkxnd0nd"/>`,
		"fallback": "ls:album",
	});
}

export default Component;
