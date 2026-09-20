import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp_8x1bzb.css';
import '../../css/b/bwxu_9b1w.css';
import '../../css/a/aspvo2b2l.css';
import '../../css/s/s2kk1gb9c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="gp_8x1bzb"><path class="bwxu_9b1w"/><path class="aspvo2b2l"/><path class="s2kk1gb9c"/></g>`,
		"fallback": "lets-icons:covert",
	});
}

export default Component;
