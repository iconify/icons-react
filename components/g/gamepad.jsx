import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g0254uoqb.css';

const viewBox = {"width":520,"height":448};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="g0254uoqb"/>`,
		"fallback": "ps:gamepad",
	});
}

export default Component;
