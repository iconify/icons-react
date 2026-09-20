import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/n/nf40vvbrx.css';
import '../../css/b/bu41zvw9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path vector-effect="non-scaling-stroke" class="nf40vvbrx"/><path vector-effect="non-scaling-stroke" class="bu41zvw9r"/></g>`,
		"fallback": "wordpress:corner-top-right",
	});
}

export default Component;
