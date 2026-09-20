import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qaa98ibfx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="qaa98ibfx"/>`,
		"fallback": "prime:circle-fill",
	});
}

export default Component;
