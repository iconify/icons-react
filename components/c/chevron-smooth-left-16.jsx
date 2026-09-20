import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vhsgjb_gi.css';
import '../../css/h/hruqhdmcp.css';
import '../../css/n/n6xeidxlr.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vhsgjb_gi"/><path clip-rule="evenodd" class="hruqhdmcp"/><path clip-rule="evenodd" class="n6xeidxlr"/>`,
		"fallback": "qlementine-icons:chevron-smooth-left-16",
	});
}

export default Component;
