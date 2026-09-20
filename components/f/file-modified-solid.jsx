import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fro4r_rjb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="fro4r_rjb"/>`,
		"fallback": "pajamas:file-modified-solid",
	});
}

export default Component;
