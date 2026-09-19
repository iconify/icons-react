import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bi12bsetm.css';
import '../../css/z/znkfbeihh.css';
import '../../css/n/nccjn1-dm.css';
import '../../css/i/ioeyefb3u.css';
import '../../css/a/ah8imtbda.css';
import '../../css/y/y626a9bts.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="bi12bsetm"><g transform="translate(3 3)"><path class="znkfbeihh"/><ellipse class="nccjn1-dm"/><path class="ioeyefb3u"/></g><path class="ah8imtbda"/><path class="y626a9bts"/></g>`,
		"fallback": "si-glyph:disc-stop",
	});
}

export default Component;
