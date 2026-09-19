import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b97j8tb8h.css';
import '../../css/c/ch0locc9x.css';
import '../../css/m/m6cgo-z4n.css';
import '../../css/b/b3y77acjg.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="b97j8tb8h"/><g class="ch0locc9x"><path class="m6cgo-z4n"/><path class="b3y77acjg"/></g>`,
		"fallback": "flat-color-icons:external",
	});
}

export default Component;
