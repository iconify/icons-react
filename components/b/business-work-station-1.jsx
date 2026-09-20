import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/g/gkg5wuyyy.css';
import '../../css/c/csszxg_wc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="gkg5wuyyy"/><path class="csszxg_wc"/></g>`,
		"fallback": "streamline-cyber:business-work-station-1",
	});
}

export default Component;
