import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xn5eo9bqs.css';
import '../../css/e/e4d64693s.css';
import '../../css/k/k5s3-z8nt.css';
import '../../css/i/idpturbzl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="xn5eo9bqs"><path class="e4d64693s"/><path class="k5s3-z8nt"/><path class="idpturbzl"/></g>`,
		"fallback": "matita:blocks",
	});
}

export default Component;
