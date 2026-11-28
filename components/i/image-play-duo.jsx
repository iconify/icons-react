import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/twb5ftgbd.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/s/szl-vpbku.css';
import '../../css/l/l3krqn9dm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="secondary twb5ftgbd"/><g class="dt0cm9dhy primary"><path class="szl-vpbku"/><path class="l3krqn9dm"/></g>`,
		"fallback": "iconaut:image-play-duo",
	});
}

export default Component;
