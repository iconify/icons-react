import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cqcd_1b7g.css';
import '../../css/o/oiny4j3cd.css';
import '../../css/o/onmyc1b4h.css';
import '../../css/w/w-cmwjbvu.css';
import '../../css/w/wqndocb7y.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="cqcd_1b7g"><path class="oiny4j3cd"/><path class="onmyc1b4h"/><path class="w-cmwjbvu"/><path class="wqndocb7y"/></g>`,
		"fallback": "devicon:electron",
	});
}

export default Component;
