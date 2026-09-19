import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yrfmti8sj.css';

const viewBox = {"width":1025,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yrfmti8sj"/>`,
		"fallback": "whh:indexmanager",
	});
}

export default Component;
