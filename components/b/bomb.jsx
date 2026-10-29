import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kn8r6wbax.css';
import '../../css/b/b439fkbnw.css';
import '../../css/m/m4rdlnbto.css';
import '../../css/z/zxjbb5bdi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="kn8r6wbax wm-k"/><path class="b439fkbnw wm-s"/><path class="m4rdlnbto"/><path class="zxjbb5bdi"/></g>`,
		"fallback": "withicons-bauhaus:bomb",
	});
}

export default Component;
