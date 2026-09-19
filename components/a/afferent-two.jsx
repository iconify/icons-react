import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3lph30dl.css';
import '../../css/y/y2dgydb7o.css';
import '../../css/a/a2im80b3m.css';
import '../../css/g/gj5isf39e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3lph30dl"><path class="y2dgydb7o"/><path class="a2im80b3m"/><path class="gj5isf39e"/></g>`,
		"fallback": "icon-park:afferent-two",
	});
}

export default Component;
