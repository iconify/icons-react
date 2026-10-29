import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/h/havwit_8r.css';
import '../../css/t/tcpezbwne.css';
import '../../css/y/y65cjwb1i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="havwit_8r"/><path class="tcpezbwne"/><path class="y65cjwb1i"/></g>`,
		"fallback": "withicons-bauhaus:bot-message-square",
	});
}

export default Component;
