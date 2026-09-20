import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b8d0o2bue.css';
import '../../css/j/jpo7_pb2a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b8d0o2bue"/><path class="jpo7_pb2a"/></g>`,
		"fallback": "keyline-icons:door-fill",
	});
}

export default Component;
