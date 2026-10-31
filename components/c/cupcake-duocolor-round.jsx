import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v4oxz9pfj.css';
import '../../css/n/no003qbta.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="v4oxz9pfj"/><path class="no003qbta"/></g>`,
		"fallback": "coolicons:cupcake-duocolor-round",
	});
}

export default Component;
