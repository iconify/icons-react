import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ipq1z-bjh.css';
import '../../css/l/l4s1krj7f.css';
import '../../css/a/aw7yywbhe.css';
import '../../css/m/mrd423bky.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ipq1z-bjh"><path class="l4s1krj7f"/><path class="aw7yywbhe"/><path class="mrd423bky"/></g>`,
		"fallback": "solar:hand-pills-line-duotone",
	});
}

export default Component;
