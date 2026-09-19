import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hxv8z0l9j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hxv8z0l9j"/>`,
		"fallback": "icomoon-free:checkbox-checked",
	});
}

export default Component;
