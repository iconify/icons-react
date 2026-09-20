import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dm4o4i1ir.css';
import '../../css/x/xh2cg4l2o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dm4o4i1ir"/><path class="xh2cg4l2o"/>`,
		"fallback": "stash:article-solid",
	});
}

export default Component;
