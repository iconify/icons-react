import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/k/kz-uz9bcv.css';
import '../../css/b/b8wlprfnu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="kz-uz9bcv"/><path class="b8wlprfnu"/></g>`,
		"fallback": "streamline-cyber:bookmark-favorite-star",
	});
}

export default Component;
