import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dt0cm9dhy.css';
import '../../css/c/cpemvhzmw.css';
import '../../css/z/z_5mljf4h.css';
import '../../css/c/c0y7u8bbj.css';
import '../../css/h/hvycq4umq.css';
import '../../css/r/ruyxe2b5t.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="dt0cm9dhy"><path class="cpemvhzmw"/><path class="z_5mljf4h"/><path class="c0y7u8bbj"/><path class="hvycq4umq"/><path class="ruyxe2b5t"/></g>`,
		"fallback": "iconaut:baseline-shift",
	});
}

export default Component;
