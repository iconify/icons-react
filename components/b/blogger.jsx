import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lzv79um5w.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lzv79um5w"/>`,
		"fallback": "icomoon-free:blogger",
	});
}

export default Component;
