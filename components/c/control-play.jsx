import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ncq44p-wx.css';
import '../../css/a/a5jqvhw6n.css';
import '../../css/g/gf5ojsi6s.css';
import '../../css/e/erwqvfa4h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ncq44p-wx"/><path class="a5jqvhw6n"/><path class="gf5ojsi6s"/><path class="erwqvfa4h"/></g>`,
		"fallback": "streamline-cyber-color:control-play",
	});
}

export default Component;
