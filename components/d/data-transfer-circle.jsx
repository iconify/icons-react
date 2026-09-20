import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/r/rt5pd106e.css';
import '../../css/e/evgiixb0i.css';
import '../../css/w/wntbh-cwx.css';
import '../../css/z/z_mmebh6g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="rt5pd106e"/><path class="evgiixb0i"/><path class="wntbh-cwx"/><path class="z_mmebh6g"/></g>`,
		"fallback": "streamline-ultimate-color:data-transfer-circle",
	});
}

export default Component;
