import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pjfc7kb2c.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pjfc7kb2c"/>`,
		"fallback": "streamline-plump:bookmark-solid",
	});
}

export default Component;
