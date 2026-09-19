import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vun9nabql.css';
import '../../css/w/w36l6ji3j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vun9nabql"/><path class="w36l6ji3j"/>`,
		"fallback": "flag:ca-1x1",
	});
}

export default Component;
