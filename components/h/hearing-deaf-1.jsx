import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/y/yj2u08bni.css';
import '../../css/g/gphoreb5g.css';
import '../../css/u/ux7jvgwqz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="yj2u08bni"/><path class="gphoreb5g"/><path class="ux7jvgwqz"/></g>`,
		"fallback": "streamline-sharp-color:hearing-deaf-1",
	});
}

export default Component;
