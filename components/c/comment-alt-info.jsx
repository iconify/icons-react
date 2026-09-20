import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l4nto2o6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="l4nto2o6g"/>`,
		"fallback": "uil:comment-alt-info",
	});
}

export default Component;
