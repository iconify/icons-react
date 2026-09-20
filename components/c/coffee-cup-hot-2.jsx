import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l3xtuk_0z.css';
import '../../css/v/vdg-z0bit.css';
import '../../css/h/h3ei9pbup.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="l3xtuk_0z"><path class="vdg-z0bit"/><path class="h3ei9pbup"/></g>`,
		"fallback": "streamline-cyber:coffee-cup-hot-2",
	});
}

export default Component;
