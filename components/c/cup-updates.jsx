import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zdf4p6y_w.css';
import '../../css/e/elyz0lc1b.css';
import '../../css/r/r8vx61juh.css';
import '../../css/m/m2nt2me3u.css';
import '../../css/g/gmchyevfp.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zdf4p6y_w"/><path class="elyz0lc1b"/><path class="r8vx61juh"/><path class="m2nt2me3u"/><path class="gmchyevfp"/>`,
		"fallback": "selfhst:cup-updates",
	});
}

export default Component;
