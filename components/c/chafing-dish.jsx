import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o93lq-byo.css';
import '../../css/d/dlyjf2byr.css';
import '../../css/l/l27fkrb0m.css';
import '../../css/x/xul25ckju.css';
import '../../css/t/tk-pr4bjm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="o93lq-byo"><path class="dlyjf2byr"/><path class="l27fkrb0m"/><path class="xul25ckju"/><path class="tk-pr4bjm"/></g>`,
		"fallback": "icon-park:chafing-dish",
	});
}

export default Component;
