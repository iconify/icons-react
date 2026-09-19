import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pbpjll5ec.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pbpjll5ec"/>`,
		"fallback": "icon-park:avatar",
	});
}

export default Component;
