import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ykqcwh8cn.css';

const viewBox = {"width":1536,"height":1536};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ykqcwh8cn"/>`,
		"fallback": "vs:floors",
	});
}

export default Component;
