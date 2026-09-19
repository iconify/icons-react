import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rggfaqb6e.css';
import '../../css/n/nlm97hbju.css';
import '../../css/f/f28gxdvxj.css';
import '../../css/h/hdcg4bb2o.css';
import '../../css/f/fl665n9ss.css';
import '../../css/v/v1pe1km5e.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="rggfaqb6e"><path class="nlm97hbju"/><path class="f28gxdvxj"/><path class="hdcg4bb2o"/><path class="fl665n9ss"/><path class="v1pe1km5e"/></g>`,
		"fallback": "icon-park:five-ellipses",
	});
}

export default Component;
