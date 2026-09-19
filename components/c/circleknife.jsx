import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdf7e4w0j.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdf7e4w0j"/>`,
		"fallback": "whh:circleknife",
	});
}

export default Component;
