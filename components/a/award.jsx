import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/s/s5_0hjy-z.css';
import '../../css/f/f6cpadc7y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="s5_0hjy-z"/><path class="f6cpadc7y"/></g>`,
		"fallback": "matita:award",
	});
}

export default Component;
