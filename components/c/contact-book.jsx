import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/v/vqdcd3pft.css';
import '../../css/k/kgzhjjbev.css';
import '../../css/c/cyqogbbmg.css';
import '../../css/m/mkc7-9b1v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="vqdcd3pft"/><path class="kgzhjjbev"/><path class="cyqogbbmg"/><path class="mkc7-9b1v"/></g>`,
		"fallback": "streamline-sharp-color:contact-book",
	});
}

export default Component;
