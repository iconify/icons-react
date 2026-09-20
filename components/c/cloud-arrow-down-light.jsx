import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jm8d_x7vj.css';
import '../../css/r/rdm-ltbjj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jm8d_x7vj"/><path class="rdm-ltbjj"/>`,
		"fallback": "stash:cloud-arrow-down-light",
	});
}

export default Component;
