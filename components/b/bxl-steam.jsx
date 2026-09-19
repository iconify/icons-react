import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lve74zb5j.css';
import '../../css/r/rkbyxzbvs.css';
import '../../css/h/hxxjcny9x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lve74zb5j"/><path class="rkbyxzbvs"/><path class="hxxjcny9x"/>`,
		"fallback": "bx:bxl-steam",
	});
}

export default Component;
