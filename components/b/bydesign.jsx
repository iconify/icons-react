import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oruooyygt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oruooyygt"/>`,
		"fallback": "icon-park-solid:bydesign",
	});
}

export default Component;
