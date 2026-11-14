import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/dxqt9nbml.css';
import '../../css/b/b55wgcb0l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="dxqt9nbml"/><path class="b55wgcb0l"/></g>`,
		"fallback": "struq:filter",
	});
}

export default Component;
