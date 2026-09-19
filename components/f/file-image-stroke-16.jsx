import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/idzt2o2kr.css';
import '../../css/p/pmqt2cblr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="idzt2o2kr"/><circle class="pmqt2cblr"/>`,
		"fallback": "garden:file-image-stroke-16",
	});
}

export default Component;
