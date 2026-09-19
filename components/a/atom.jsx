import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l73w39bqc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l73w39bqc"/>`,
		"fallback": "griddy-icons:atom",
	});
}

export default Component;
