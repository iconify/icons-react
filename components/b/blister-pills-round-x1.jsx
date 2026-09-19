import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/myb6k18tj.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="myb6k18tj"/>`,
		"fallback": "healthicons:blister-pills-round-x1",
	});
}

export default Component;
