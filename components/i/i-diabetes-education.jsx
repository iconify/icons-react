import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ownc4obbs.css';
import '../../css/w/w0z-12ljo.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ownc4obbs"/><path class="w0z-12ljo"/>`,
		"fallback": "medical-icon:i-diabetes-education",
	});
}

export default Component;
