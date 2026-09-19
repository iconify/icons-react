import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f66n5zbkj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f66n5zbkj"/>`,
		"fallback": "icon-park-outline:comment-one",
	});
}

export default Component;
