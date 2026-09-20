import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/viv_y20jj.css';
import '../../css/b/bakwbrbca.css';
import '../../css/y/yen5i-bgb.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="viv_y20jj"/><path class="bakwbrbca"/><path clip-rule="evenodd" class="yen5i-bgb"/></g>`,
		"fallback": "streamline-sharp-color:database-flat",
	});
}

export default Component;
