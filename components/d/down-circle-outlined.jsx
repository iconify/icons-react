import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/f33c5bbfy.css';
import '../../css/y/yv_brepse.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="f33c5bbfy"/><path class="yv_brepse"/>`,
		"fallback": "ant-design:down-circle-outlined",
	});
}

export default Component;
