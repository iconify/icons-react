import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/a/aw79_wdne.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="aw79_wdne"/><line x1="1.75" x2="10.25" y1="2.25" y2="14.25"/></g>`,
		"fallback": "charm:camera-video-slash",
	});
}

export default Component;
