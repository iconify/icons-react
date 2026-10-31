import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpe4y4bdd.css';
import '../../css/a/a0m2q3bsg.css';
import '../../css/f/fqhq6fbgo.css';
import '../../css/e/edfqzq-tl.css';
import '../../css/s/ss0x5acba.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g display="block"><path class="mpe4y4bdd"/><path class="a0m2q3bsg"/><path class="fqhq6fbgo"/><path class="edfqzq-tl"/><path class="ss0x5acba"/></g>`,
		"fallback": "iconito:dumpling",
	});
}

export default Component;
