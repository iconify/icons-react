import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/ck3c2j_ot.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ck3c2j_ot"/>`,
		"fallback": "streamline-plump:coffee-mug-solid",
	});
}

export default Component;
