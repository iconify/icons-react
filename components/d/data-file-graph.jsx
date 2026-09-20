import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/s/s_tkimf1c.css';
import '../../css/q/qkdz1mbgd.css';
import '../../css/c/ca-rbu-xa.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="s_tkimf1c"/><path class="qkdz1mbgd"/><path class="ca-rbu-xa"/></g>`,
		"fallback": "streamline-ultimate:data-file-graph",
	});
}

export default Component;
