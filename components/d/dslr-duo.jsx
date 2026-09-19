import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/z/z37uebc7b.css';
import '../../css/a/askoajqcq.css';
import '../../css/o/o7v6_-bes.css';
import '../../css/f/f3im07b2u.css';

const viewBox = {"width":80,"height":80};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="z37uebc7b"/><path class="askoajqcq"/><path class="o7v6_-bes"/><path class="f3im07b2u"/></g>`,
		"fallback": "glyphs:dslr-duo",
	});
}

export default Component;
