import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/el07r1zqo.css';
import '../../css/o/oelx92bax.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="el07r1zqo"/><path class="oelx92bax"/>`,
		"fallback": "ion:construct",
	});
}

export default Component;
