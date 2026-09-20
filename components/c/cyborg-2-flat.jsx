import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/f/fblg3rqtk.css';
import '../../css/o/odk0w2lme.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="fblg3rqtk"/><path class="odk0w2lme"/></g>`,
		"fallback": "streamline-flex-color:cyborg-2-flat",
	});
}

export default Component;
