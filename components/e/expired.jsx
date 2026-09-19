import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/g-z0-dbnl.css';
import '../../css/e/ewy5x2b8c.css';
import '../../css/t/tei7lds-b.css';
import '../../css/c/c_q70mbhz.css';
import '../../css/x/xenr55hzn.css';
import '../../css/c/cjeme36_e.css';
import '../../css/z/ze3_hdcjp.css';
import '../../css/q/qau76ybxi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="g-z0-dbnl"/><circle class="ewy5x2b8c"/><path class="tei7lds-b"/><path class="c_q70mbhz"/><circle class="xenr55hzn"/><circle class="cjeme36_e"/><path class="ze3_hdcjp"/><path class="qau76ybxi"/>`,
		"fallback": "flat-color-icons:expired",
	});
}

export default Component;
