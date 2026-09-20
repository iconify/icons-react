import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/yon6xs4ru.css';
import '../../css/s/sds0i4bbi.css';
import '../../css/s/sg1uy3bnt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="yon6xs4ru"/><path clip-rule="evenodd" class="sds0i4bbi"/><path class="sg1uy3bnt"/></g>`,
		"fallback": "streamline-color:beanie-flat",
	});
}

export default Component;
