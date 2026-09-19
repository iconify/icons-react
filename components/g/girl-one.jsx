import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g54fotb1f.css';
import '../../css/b/bshyy_b6k.css';
import '../../css/d/dt9l70how.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="g54fotb1f"><circle class="bshyy_b6k"/><path class="dt9l70how"/></g>`,
		"fallback": "icon-park-solid:girl-one",
	});
}

export default Component;
