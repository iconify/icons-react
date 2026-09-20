import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/h/hgos06uew.css';
import '../../css/d/dcyqcnb9t.css';
import '../../css/i/ilqdbobey.css';
import '../../css/a/a1h58wksc.css';
import '../../css/x/x5i_lgb9r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="hgos06uew"/><path class="dcyqcnb9t"/><path class="ilqdbobey"/><path class="a1h58wksc"/><path class="x5i_lgb9r"/></g>`,
		"fallback": "streamline-freehand:customer-action-complaint",
	});
}

export default Component;
