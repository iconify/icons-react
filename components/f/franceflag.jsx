import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/y3ep-0b7w.css';
import '../../css/r/rcci-d4wx.css';
import '../../css/b/b197rfn0j.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="y3ep-0b7w"/><path class="rcci-d4wx"/><path class="b197rfn0j"/>`,
		"fallback": "fxemoji:franceflag",
	});
}

export default Component;
