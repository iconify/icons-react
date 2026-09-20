import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/x57cucbsx.css';
import '../../css/d/dyudmpnfz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="x57cucbsx"/><path class="dyudmpnfz"/></g>`,
		"fallback": "streamline-sharp-color:floppy-disk-flat",
	});
}

export default Component;
