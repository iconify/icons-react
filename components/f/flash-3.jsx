import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_mzsrbht.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t_mzsrbht"/>`,
		"fallback": "streamline-flex:flash-3",
	});
}

export default Component;
