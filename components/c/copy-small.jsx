import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/e/eamuywvkw.css';
import '../../css/s/swgf26b7q.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><rect vector-effect="non-scaling-stroke" class="eamuywvkw"/><path vector-effect="non-scaling-stroke" class="swgf26b7q"/></g>`,
		"fallback": "wordpress:copy-small",
	});
}

export default Component;
