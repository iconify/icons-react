import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j1s7p1btp.css';
import '../../css/b/bkbgdy_cy.css';
import '../../css/u/uv5airb2t.css';
import '../../css/x/xgvfbubrv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j1s7p1btp"/><path class="bkbgdy_cy"/><path class="uv5airb2t"/><path class="xgvfbubrv"/>`,
		"fallback": "flat-color-icons:briefcase",
	});
}

export default Component;
