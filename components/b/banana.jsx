import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/o/ooefdb7zl.css';
import '../../css/c/csys6ebqh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="ooefdb7zl"/><path class="csys6ebqh"/></g>`,
		"fallback": "icon-park-solid:banana",
	});
}

export default Component;
