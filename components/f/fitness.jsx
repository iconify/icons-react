import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ct2_n2buj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ct2_n2buj"/>`,
		"fallback": "icon-park:fitness",
	});
}

export default Component;
