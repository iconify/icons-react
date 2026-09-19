import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f-av-u1xr.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f-av-u1xr"/>`,
		"fallback": "ant-design:down-circle-fill",
	});
}

export default Component;
