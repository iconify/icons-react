import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/i4-x3ym0b.css';
import '../../css/d/dsgj35whj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="i4-x3ym0b"/><path class="dsgj35whj"/></g>`,
		"fallback": "streamline-freehand:alert-alarm-clock",
	});
}

export default Component;
