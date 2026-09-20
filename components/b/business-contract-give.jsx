import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/y/yry6f8qkg.css';
import '../../css/m/mb_vxkgos.css';
import '../../css/t/tu4cz248c.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="yry6f8qkg"/><path class="mb_vxkgos"/><path class="tu4cz248c"/></g>`,
		"fallback": "streamline-ultimate:business-contract-give",
	});
}

export default Component;
