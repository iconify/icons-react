import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dsar8eb2v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dsar8eb2v"/>`,
		"fallback": "lsicon:hight-lessen-outline",
	});
}

export default Component;
