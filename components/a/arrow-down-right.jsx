import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/a/achzcybbt.css';
import '../../css/n/nnxq87bpo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="achzcybbt"/><path class="nnxq87bpo"/></g>`,
		"fallback": "matita:arrow-down-right",
	});
}

export default Component;
