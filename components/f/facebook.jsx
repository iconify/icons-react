import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fti5rt4zk.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fti5rt4zk"/>`,
		"fallback": "icon-park:facebook",
	});
}

export default Component;
