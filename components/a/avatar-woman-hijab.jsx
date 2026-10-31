import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jzw2lwbkq.css';
import '../../css/s/suk9k0ikq.css';
import '../../css/v/vhst3sfwd.css';
import '../../css/g/gyj96tlry.css';
import '../../css/z/zazjq4j_y.css';
import '../../css/o/okxeb2blk.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="jzw2lwbkq wm-shadow"/><path class="suk9k0ikq"/><path class="vhst3sfwd"/><path class="gyj96tlry"/><path class="zazjq4j_y"/><path class="okxeb2blk"/></g>`,
		"fallback": "withicons-brutal:avatar-woman-hijab",
	});
}

export default Component;
