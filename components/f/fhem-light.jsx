import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/frl9spbxs.css';
import '../../css/b/bocz3tbbh.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="frl9spbxs"/><path class="bocz3tbbh"/>`,
		"fallback": "selfhst:fhem-light",
	});
}

export default Component;
