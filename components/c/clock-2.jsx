import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/f/fiw9h3bjt.css';
import '../../css/j/jcgjnnb8w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="fiw9h3bjt"/><path class="jcgjnnb8w"/></g>`,
		"fallback": "matita:clock-2",
	});
}

export default Component;
