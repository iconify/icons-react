import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g7r46xbio.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g7r46xbio"/>`,
		"fallback": "fluent-mdl2:export-mirrored",
	});
}

export default Component;
