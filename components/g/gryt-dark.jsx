import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o51_pm-7x.css';
import '../../css/y/ydjw7j4fv.css';
import '../../css/r/r0wa9gb5j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="o51_pm-7x"/><path class="ydjw7j4fv"/><path class="r0wa9gb5j"/>`,
		"fallback": "selfhst:gryt-dark",
	});
}

export default Component;
