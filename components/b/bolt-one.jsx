import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hit3bi0-v.css';
import '../../css/r/rq8p0hbxp.css';
import '../../css/s/saavl5qcz.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hit3bi0-v"><path class="rq8p0hbxp"/><path class="saavl5qcz"/></g>`,
		"fallback": "icon-park-outline:bolt-one",
	});
}

export default Component;
