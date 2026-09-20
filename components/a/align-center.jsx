import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aqmg86b8p.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aqmg86b8p"/>`,
		"fallback": "zondicons:align-center",
	});
}

export default Component;
