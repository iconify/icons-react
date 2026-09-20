import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q06cdppcc.css';
import '../../css/b/bmxodmujg.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q06cdppcc"/><path class="bmxodmujg"/></g>`,
		"fallback": "tabler:headset-off",
	});
}

export default Component;
