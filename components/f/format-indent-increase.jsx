import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wwl-77ffc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wwl-77ffc"/>`,
		"fallback": "gg:format-indent-increase",
	});
}

export default Component;
