import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf1a2zbxd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rf1a2zbxd"/>`,
		"fallback": "reicon:earbuds-remove",
	});
}

export default Component;
