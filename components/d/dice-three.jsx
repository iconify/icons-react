import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zho1-hbxw.css';

const viewBox = {"width":448,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zho1-hbxw"/>`,
		"fallback": "fa-solid:dice-three",
	});
}

export default Component;
