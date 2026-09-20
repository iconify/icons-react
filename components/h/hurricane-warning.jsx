import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8dreem3w.css';

const viewBox = {"width":30,"height":30};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8dreem3w"/>`,
		"fallback": "wi:hurricane-warning",
	});
}

export default Component;
