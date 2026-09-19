import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m82ucs_8j.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m82ucs_8j"/>`,
		"fallback": "icon-park-outline:align-left-two",
	});
}

export default Component;
