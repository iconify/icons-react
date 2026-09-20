import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/m/mt6g2645m.css';
import '../../css/d/du76ckpmo.css';
import '../../css/x/x111trbwk.css';
import '../../css/y/ymd-0ccih.css';
import '../../css/k/ktx9ixb5y.css';
import '../../css/i/i2-e59brc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="mt6g2645m"/><path class="du76ckpmo"/><path class="x111trbwk"/><path class="ymd-0ccih"/><path class="ktx9ixb5y"/><path class="i2-e59brc"/></g>`,
		"fallback": "streamline-sharp-color:hierarchy-8",
	});
}

export default Component;
