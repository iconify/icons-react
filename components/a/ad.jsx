import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/mvekuabrc.css';
import '../../css/f/f7oovfquj.css';
import '../../css/c/cxmbiab3o.css';
import '../../css/o/oage_qcad.css';
import '../../css/x/xjnpp3b7f.css';
import '../../css/f/fu00bkj3r.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><circle class="mvekuabrc"/><path class="f7oovfquj"/><path class="cxmbiab3o"/><path class="oage_qcad"/><path class="xjnpp3b7f"/><path class="fu00bkj3r"/></g>`,
		"fallback": "icon-park:ad",
	});
}

export default Component;
