import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dkv48acbf.css';
import '../../css/c/cz41eo7vw.css';
import '../../css/r/re1qp3mkc.css';
import '../../css/b/bykglcbce.css';
import '../../css/w/wdxpo1vxi.css';
import '../../css/p/pnlnk1b9t.css';
import '../../css/f/fhb-_bceo.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dkv48acbf"><path class="cz41eo7vw"/><path class="re1qp3mkc wm-shine"/><path class="bykglcbce wm-k"/><path class="wdxpo1vxi wm-a"/><path class="pnlnk1b9t"/><path class="fhb-_bceo"/></g>`,
		"fallback": "withicons-kawaii:api",
	});
}

export default Component;
