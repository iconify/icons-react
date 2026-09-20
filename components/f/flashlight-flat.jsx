import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z9htctbmx.css';
import '../../css/i/iuz2rob6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z9htctbmx"/><path clip-rule="evenodd" class="iuz2rob6a"/></g>`,
		"fallback": "streamline-sharp-color:flashlight-flat",
	});
}

export default Component;
