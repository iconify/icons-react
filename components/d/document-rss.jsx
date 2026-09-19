import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/ifg9mq6tz.css';
import '../../css/t/tsjahwyuo.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="n1lsf0bnc"><path class="ifg9mq6tz"/><path class="tsjahwyuo"/></g>`,
		"fallback": "si-glyph:document-rss",
	});
}

export default Component;
