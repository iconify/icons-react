import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rz6yhgbxw.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rz6yhgbxw"/>`,
		"fallback": "heroicons:arrow-up-on-square-stack-20-solid",
	});
}

export default Component;
