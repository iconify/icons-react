import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s8iftzbxv.css';
import '../../css/z/zm26i8bpa.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s8iftzbxv"/><path class="zm26i8bpa"/>`,
		"fallback": "ant-design:dislike-twotone",
	});
}

export default Component;
