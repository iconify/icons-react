import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrxcox1xc.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="yrxcox1xc"/>`,
		"fallback": "gravity-ui:comment-dot",
	});
}

export default Component;
