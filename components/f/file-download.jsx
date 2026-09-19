import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v2n7cu74s.css';

const viewBox = {"width":1280,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v2n7cu74s"/>`,
		"fallback": "vs:file-download",
	});
}

export default Component;
