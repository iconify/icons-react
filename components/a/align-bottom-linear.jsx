import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/j/jpo7_pb2a.css';
import '../../css/o/oy1zyc70h.css';
import '../../css/s/sflfg-b2u.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="jpo7_pb2a"/><path class="oy1zyc70h"/><path class="sflfg-b2u"/></g>`,
		"fallback": "solar:align-bottom-linear",
	});
}

export default Component;
