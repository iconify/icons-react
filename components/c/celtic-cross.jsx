import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ucdh_db4k.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ucdh_db4k"/>`,
		"fallback": "pinhead:celtic-cross",
	});
}

export default Component;
