import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tvoy7epho.css';
import '../../css/h/hyinz4b3x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="tvoy7epho"/><path class="hyinz4b3x"/>`,
		"fallback": "token:alu",
	});
}

export default Component;
