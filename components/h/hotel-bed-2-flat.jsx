import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/i_rpmledk.css';
import '../../css/r/r8mbxebmy.css';
import '../../css/o/ozojhyb-d.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="i_rpmledk"/><path class="r8mbxebmy"/><path clip-rule="evenodd" class="ozojhyb-d"/></g>`,
		"fallback": "streamline-color:hotel-bed-2-flat",
	});
}

export default Component;
