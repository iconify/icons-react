import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/vkswx2b4p.css';
import '../../css/r/r21ausb1a.css';
import '../../css/r/rznseaccn.css';
import '../../css/a/aw7vnsxhx.css';
import '../../css/b/b2pr0e8dr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="vkswx2b4p"/><path class="r21ausb1a"/><path class="rznseaccn"/><path class="aw7vnsxhx"/><path class="b2pr0e8dr"/></g>`,
		"fallback": "iconaut:cassette",
	});
}

export default Component;
