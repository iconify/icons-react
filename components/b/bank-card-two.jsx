import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufeehvblu.css';
import '../../css/l/lcs_r-tfw.css';
import '../../css/v/vx77j8bxg.css';
import '../../css/x/xupzaydsh.css';
import '../../css/v/vzdx5c9so.css';
import '../../css/r/rh-s7xmlw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ufeehvblu"><path class="lcs_r-tfw"/><path class="vx77j8bxg"/><path class="xupzaydsh"/><path class="vzdx5c9so"/><path class="rh-s7xmlw"/></g>`,
		"fallback": "icon-park:bank-card-two",
	});
}

export default Component;
