import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jvinqywwg.css';
import '../../css/u/uf7t9wezo.css';
import '../../css/a/aa72nvbha.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="jvinqywwg"/><path class="uf7t9wezo"/><path class="aa72nvbha"/></g>`,
		"fallback": "tabler:buldozer",
	});
}

export default Component;
