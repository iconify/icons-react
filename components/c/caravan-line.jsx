import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcpoo5ppq.css';
import '../../css/i/ii1apz97u.css';
import '../../css/c/czjy_engd.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="clr-i-outline clr-i-outline-path-1 pcpoo5ppq"/><path class="clr-i-outline clr-i-outline-path-2 ii1apz97u"/><path class="clr-i-outline clr-i-outline-path-3 czjy_engd"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:caravan-line",
	});
}

export default Component;
