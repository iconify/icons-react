import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/atc45wb9u.css';
import '../../css/p/pau-f6wvj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="atc45wb9u"/><path class="pau-f6wvj"/></g>`,
		"fallback": "tabler:hexagon-number-7",
	});
}

export default Component;
