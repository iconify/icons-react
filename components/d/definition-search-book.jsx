import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/v2j5fwb-r.css';
import '../../css/a/axd2u9gpv.css';
import '../../css/h/he39jukbn.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="v2j5fwb-r"/><path class="axd2u9gpv"/><path class="he39jukbn"/></g>`,
		"fallback": "streamline-color:definition-search-book",
	});
}

export default Component;
