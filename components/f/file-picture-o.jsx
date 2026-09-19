import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uuyhfknlh.css';

const viewBox = {"width":1536,"height":1792};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uuyhfknlh"/>`,
		"fallback": "fa:file-picture-o",
	});
}

export default Component;
