import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/w84vznkgo.css';
import '../../css/z/zah5plefr.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="w84vznkgo"/><path class="zah5plefr"/>`,
		"fallback": "ion:ban-outline",
	});
}

export default Component;
