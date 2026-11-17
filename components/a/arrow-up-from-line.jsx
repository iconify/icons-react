import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/h/h04b3_akp.css';
import '../../css/p/pytpsobef.css';
import '../../css/p/ppr5ipb7o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="h04b3_akp"/><path class="pytpsobef"/><path class="ppr5ipb7o"/></g>`,
		"fallback": "matita:arrow-up-from-line",
	});
}

export default Component;
