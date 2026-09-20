import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/l/l7u-4rb7i.css';
import '../../css/a/ah92i4n0h.css';
import '../../css/d/di3s11blc.css';
import '../../css/m/mu62w5buf.css';
import '../../css/q/qd8-7pq5m.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="l7u-4rb7i"/><path class="ah92i4n0h"/><path class="di3s11blc"/><path class="mu62w5buf"/><path class="qd8-7pq5m"/></g>`,
		"fallback": "streamline-logos:hbo-max-logo",
	});
}

export default Component;
