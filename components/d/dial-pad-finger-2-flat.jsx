import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/s/sp1rtvb2c.css';
import '../../css/i/igde2ez5w.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="sp1rtvb2c"/><path clip-rule="evenodd" class="igde2ez5w"/></g>`,
		"fallback": "streamline-sharp-color:dial-pad-finger-2-flat",
	});
}

export default Component;
