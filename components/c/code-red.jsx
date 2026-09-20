import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ogl56j_pb.css';
import '../../css/d/ddop6km7w.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ogl56j_pb"/><path class="ddop6km7w"/>`,
		"fallback": "meteocons:code-red",
	});
}

export default Component;
