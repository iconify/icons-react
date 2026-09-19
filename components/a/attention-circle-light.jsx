import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/u/uuky_gise.css';
import '../../css/t/tvgcsmq7b.css';
import '../../css/y/ymlfz7e-n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><circle class="uuky_gise"/><path class="tvgcsmq7b"/><path class="ymlfz7e-n"/></g>`,
		"fallback": "iconamoon:attention-circle-light",
	});
}

export default Component;
