import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/h01tyzbfu.css';
import '../../css/o/o17i3_bfe.css';
import '../../css/q/qujk5fkgk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="h01tyzbfu"><path class="o17i3_bfe"/><path class="qujk5fkgk"/></g>`,
		"fallback": "streamline-logos:google-cast-logo",
	});
}

export default Component;
