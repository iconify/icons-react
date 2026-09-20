import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qt_dw-i0g.css';
import '../../css/t/t824cqbjs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qt_dw-i0g"/><path clip-rule="evenodd" class="t824cqbjs"/>`,
		"fallback": "si:ai-shield-fill",
	});
}

export default Component;
