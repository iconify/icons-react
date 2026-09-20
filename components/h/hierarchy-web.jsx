import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xjecwpb6j.css';
import '../../css/f/fnick3f-z.css';
import '../../css/v/v9pdm5hvv.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="xjecwpb6j"/><path class="fnick3f-z"/><path class="v9pdm5hvv"/></g>`,
		"fallback": "streamline-freehand-color:hierarchy-web",
	});
}

export default Component;
