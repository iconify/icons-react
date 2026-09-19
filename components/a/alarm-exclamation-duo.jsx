import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/tvp0f-b9t.css';
import '../../css/e/e5v1wybfk.css';
import '../../css/o/o1eh7fb7f.css';
import '../../css/q/qr1jw7bwa.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="tvp0f-b9t"/><path class="e5v1wybfk"/><path class="o1eh7fb7f"/><path class="qr1jw7bwa"/></g>`,
		"fallback": "glyphs:alarm-exclamation-duo",
	});
}

export default Component;
