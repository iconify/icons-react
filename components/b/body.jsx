import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yfz3w9lrl.css';
import '../../css/n/n_mcnmbeq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="yfz3w9lrl"/><path class="n_mcnmbeq"/>`,
		"fallback": "bx:body",
	});
}

export default Component;
