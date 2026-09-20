import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/aylyh4brw.css';
import '../../css/b/bpmtllbfx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="aylyh4brw"/><path class="bpmtllbfx"/>`,
		"fallback": "material-icon-theme:folder-aws-open",
	});
}

export default Component;
