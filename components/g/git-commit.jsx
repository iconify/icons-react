import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sv7ay2bxn.css';
import '../../css/c/cmzuzpb3v.css';
import '../../css/o/o7gsu44wi.css';
import '../../css/s/s5-crub1t.css';
import '../../css/g/gf3twj98y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="sv7ay2bxn"><path class="cmzuzpb3v wm-shadow"/><path class="o7gsu44wi wm-shadow"/><path class="s5-crub1t"/><path class="gf3twj98y"/></g>`,
		"fallback": "withicons-brutal:git-commit",
	});
}

export default Component;
