import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g1_gbyj9e.css';
import '../../css/i/ihx5pgbrx.css';
import '../../css/a/ak1e8fwvs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="g1_gbyj9e"/><path class="ihx5pgbrx"/><path class="ak1e8fwvs"/></g>`,
		"fallback": "matita:graduation-cap",
	});
}

export default Component;
