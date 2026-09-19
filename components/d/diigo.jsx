import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow8pqgbao.css';

const viewBox = {"width":264,"height":488};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ow8pqgbao"/>`,
		"fallback": "ps:diigo",
	});
}

export default Component;
