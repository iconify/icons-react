import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jk0i849iz.css';
import '../../css/o/oxaxv7xbl.css';
import '../../css/i/il5xq3b2q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jk0i849iz"/><path class="oxaxv7xbl"/><path class="il5xq3b2q"/></g>`,
		"fallback": "withicons-bauhaus:carrot",
	});
}

export default Component;
