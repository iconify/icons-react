import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vvkz5rbsj.css';
import '../../css/h/hzy4kud9a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vvkz5rbsj"/><path class="hzy4kud9a"/>`,
		"fallback": "pixel:arrow-circle-right",
	});
}

export default Component;
