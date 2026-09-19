import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cuyn6tgcc.css';
import '../../css/p/pwdvyobga.css';
import '../../css/c/cqbz3jbwz.css';
import '../../css/w/wu_1q67jj.css';
import '../../css/e/euwoe6oni.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cuyn6tgcc"><path class="pwdvyobga"/><path class="cqbz3jbwz"/><path class="wu_1q67jj"/><path class="euwoe6oni"/></g>`,
		"fallback": "at-icons:database",
	});
}

export default Component;
