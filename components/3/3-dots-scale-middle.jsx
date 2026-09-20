import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qd9ajlbga.css';
import '../../css/v/vdnqjebwm.css';
import '../../css/x/xj894begb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle r="1.5" class="qd9ajlbga"><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"/></circle><circle r="3" class="vdnqjebwm"><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="3;1.5;3"/></circle><circle r="1.5" class="xj894begb"><animate attributeName="r" dur="0.75s" repeatCount="indefinite" values="1.5;3;1.5"/></circle>`,
		"fallback": "svg-spinners:3-dots-scale-middle",
	});
}

export default Component;
