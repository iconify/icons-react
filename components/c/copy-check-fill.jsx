import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wr6rzobzg.css';

const viewBox = {"width":256,"height":256};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wr6rzobzg"/>`,
		"fallback": "pullo:copy-check-fill",
	});
}

export default Component;
