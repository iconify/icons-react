import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/g/gpbfd-bbj.css';
import '../../css/d/ds9nz3qrr.css';
import '../../css/x/xj9-7bcyf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="gpbfd-bbj"/><circle class="ds9nz3qrr"/><path class="xj9-7bcyf"/></g>`,
		"fallback": "icon-park:folder-search-one",
	});
}

export default Component;
