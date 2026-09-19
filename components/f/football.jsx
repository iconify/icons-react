import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz_20wbpz.css';
import '../../css/g/geju8gabu.css';
import '../../css/e/ehotb-rys.css';
import '../../css/z/zwy-7u4cy.css';
import '../../css/q/qp26irmvt.css';
import '../../css/m/mlirullni.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nz_20wbpz"><path class="geju8gabu"/><path class="ehotb-rys"/><path class="zwy-7u4cy"/><path class="qp26irmvt"/><path class="mlirullni"/></g>`,
		"fallback": "icon-park-outline:football",
	});
}

export default Component;
