import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a_jtf253g.css';
import '../../css/d/d9g4t29kt.css';
import '../../css/x/x3zud0byo.css';
import '../../css/x/x9lkoi69j.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="a_jtf253g"/><path class="d9g4t29kt"/><circle class="x3zud0byo"/><path class="x9lkoi69j"/>`,
		"fallback": "carbon:ibm-event-processing",
	});
}

export default Component;
