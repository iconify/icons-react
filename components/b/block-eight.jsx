import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hbx1--m4y.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hbx1--m4y"/>`,
		"fallback": "icon-park-solid:block-eight",
	});
}

export default Component;
