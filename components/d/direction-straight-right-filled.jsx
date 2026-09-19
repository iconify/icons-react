import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf838kbvj.css';
import '../../css/h/hp757egpp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf838kbvj"/><path class="hp757egpp"/>`,
		"fallback": "carbon:direction-straight-right-filled",
	});
}

export default Component;
