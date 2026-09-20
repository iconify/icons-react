import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpkwgdkyq.css';
import '../../css/t/t9lx2dbpq.css';
import '../../css/m/mixumub2y.css';
import '../../css/a/a0ezjxkkf.css';
import '../../css/x/xb0dlfuwk.css';
import '../../css/a/amg3e5b5r.css';
import '../../css/s/sath0kbdg.css';

const viewBox = {"width":72,"height":72};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpkwgdkyq"/><path class="t9lx2dbpq"/><path class="mixumub2y"/><path class="a0ezjxkkf"/><path class="xb0dlfuwk"/><path class="amg3e5b5r"/><path class="sath0kbdg"/>`,
		"fallback": "openmoji:hammer-and-wrench",
	});
}

export default Component;
