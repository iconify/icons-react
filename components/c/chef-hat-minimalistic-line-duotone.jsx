import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/ew0pomb-m.css';
import '../../css/c/cjw43km3x.css';
import '../../css/f/f6tgfew3u.css';
import '../../css/z/zkglr3x2x.css';
import '../../css/l/l5mj12bgx.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="ew0pomb-m"/><path class="cjw43km3x"/><path class="f6tgfew3u"/><path class="zkglr3x2x"/><path class="l5mj12bgx"/></g>`,
		"fallback": "solar:chef-hat-minimalistic-line-duotone",
	});
}

export default Component;
