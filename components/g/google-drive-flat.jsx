import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v504i5b4l.css';
import '../../css/z/z6lksmbxb.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="bi12bsetm"><path class="v504i5b4l"/><path class="z6lksmbxb"/></g>`,
		"fallback": "streamline-color:google-drive-flat",
	});
}

export default Component;
