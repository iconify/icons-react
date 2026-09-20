import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jipkl1aqu.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="jipkl1aqu"/>`,
		"fallback": "streamline-plump:heater-solid",
	});
}

export default Component;
