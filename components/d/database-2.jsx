import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/k/k_949kg-n.css';
import '../../css/r/rvo3l_hzu.css';
import '../../css/q/qhnqewbrr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="k_949kg-n"/><path class="rvo3l_hzu"/><path class="qhnqewbrr"/></g>`,
		"fallback": "streamline-ultimate:database-2",
	});
}

export default Component;
