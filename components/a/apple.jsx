import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/a/aukdz5b-j.css';
import '../../css/g/gzmhkdb5e.css';
import '../../css/u/utwclnbod.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="aukdz5b-j"/><path class="gzmhkdb5e"/><path class="utwclnbod"/></g>`,
		"fallback": "streamline-sharp-color:apple",
	});
}

export default Component;
