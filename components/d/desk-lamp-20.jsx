import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sh-egpbpk.css';
import '../../css/p/pzb63_vzh.css';
import '../../css/n/n4ap65bfk.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sh-egpbpk"/><path class="pzb63_vzh"/><path class="n4ap65bfk"/>`,
		"fallback": "energy-icons:desk-lamp-20",
	});
}

export default Component;
