import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/iwj77ybvw.css';
import '../../css/o/ov2rfmuuv.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="iwj77ybvw"/><path class="ov2rfmuuv"/></g>`,
		"fallback": "streamline:copy-paste-solid",
	});
}

export default Component;
