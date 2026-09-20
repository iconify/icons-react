import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h1bsd-mei.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="h1bsd-mei"/>`,
		"fallback": "streamline-plump:drum-stick-solid",
	});
}

export default Component;
