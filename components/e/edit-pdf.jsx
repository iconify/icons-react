import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/k/k5y6twb8d.css';
import '../../css/q/qif5f6b5k.css';
import '../../css/y/y416tbcdr.css';
import '../../css/m/m9t295yna.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="k5y6twb8d"/><path class="qif5f6b5k"/><path class="y416tbcdr"/><path class="m9t295yna"/></g>`,
		"fallback": "streamline-sharp-color:edit-pdf",
	});
}

export default Component;
