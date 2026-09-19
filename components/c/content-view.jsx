import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/ksnpplbgb.css';
import '../../css/l/l6uihqb0x.css';
import '../../css/l/l5hse2boy.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="ksnpplbgb"/><path class="l6uihqb0x"/><path class="l5hse2boy"/>`,
		"fallback": "carbon:content-view",
	});
}

export default Component;
