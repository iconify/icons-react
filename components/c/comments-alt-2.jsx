import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y081e11iz.css';
import '../../css/m/m-mridb4l.css';

const viewBox = {"width":64,"height":64};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y081e11iz"/><path class="m-mridb4l"/>`,
		"fallback": "lineicons:comments-alt-2",
	});
}

export default Component;
