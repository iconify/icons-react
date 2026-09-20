import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/lrzhmvbrj.css';
import '../../css/a/adrgfei1r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="lrzhmvbrj"/><path class="adrgfei1r"/></g>`,
		"fallback": "tabler:gauge-off",
	});
}

export default Component;
