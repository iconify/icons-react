import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/ddvgu8bvv.css';
import '../../css/s/srkf9gb2m.css';
import '../../css/s/sewevacut.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ddvgu8bvv"><path class="srkf9gb2m"/><path class="sewevacut"/></g>`,
		"fallback": "hugeicons:cursor-rectangle-selection-02",
	});
}

export default Component;
