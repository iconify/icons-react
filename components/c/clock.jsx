import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fxghr-bvw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fxghr-bvw"/>`,
		"fallback": "f7:clock",
	});
}

export default Component;
