import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/q/qzkhf9znl.css';
import '../../css/g/grd5-pe1q.css';
import '../../css/m/mn9q66bmt.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="qzkhf9znl"/><path class="grd5-pe1q"/><path class="mn9q66bmt"/></g>`,
		"fallback": "icon-park:hard-disk-one",
	});
}

export default Component;
