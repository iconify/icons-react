import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/v/vh5znhotu.css';
import '../../css/a/ayf976bbf.css';
import '../../css/t/tkfrl-bwu.css';
import '../../css/d/ddq-3fb3s.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="vh5znhotu"/><path clip-rule="evenodd" class="ayf976bbf"/><path class="tkfrl-bwu"/><path clip-rule="evenodd" class="ddq-3fb3s"/></g>`,
		"fallback": "glyphs:check-circle-outline",
	});
}

export default Component;
