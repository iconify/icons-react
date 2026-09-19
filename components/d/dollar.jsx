import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mbih5wbfe.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mbih5wbfe"/>`,
		"fallback": "icon-park-outline:dollar",
	});
}

export default Component;
