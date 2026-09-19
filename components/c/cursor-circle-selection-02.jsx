import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/srkf9gb2m.css';
import '../../css/a/au6ciacvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="srkf9gb2m"/><path class="au6ciacvs"/></g>`,
		"fallback": "hugeicons:cursor-circle-selection-02",
	});
}

export default Component;
