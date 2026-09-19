import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yif4bibhx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yif4bibhx"/>`,
		"fallback": "icomoon-free:cool2",
	});
}

export default Component;
