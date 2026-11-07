import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gev1bgbpp.css';
import '../../css/s/sxg7_0u7a.css';
import '../../css/x/xtpeb-edw.css';
import '../../css/e/ei8oz4plf.css';
import '../../css/p/ph4957wtr.css';
import '../../css/m/m_-galn8l.css';
import '../../css/d/dooehbb5r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gev1bgbpp"/><path clip-rule="evenodd" class="sxg7_0u7a"/><g class="xtpeb-edw"><path class="ei8oz4plf"/><path class="ph4957wtr"/><path class="m_-galn8l"/><path class="dooehbb5r"/></g>`,
		"fallback": "solar:basketball-bold-duotone",
	});
}

export default Component;
