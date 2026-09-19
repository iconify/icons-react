import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs9upekiu.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs9upekiu"/>`,
		"fallback": "bpmn:gateway-parallel",
	});
}

export default Component;
