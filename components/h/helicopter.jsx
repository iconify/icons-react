import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/p/p7jr1pszw.css';
import '../../css/k/ko2c-ubym.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="p7jr1pszw"/><path class="ko2c-ubym"/></g>`,
		"fallback": "tabler:helicopter",
	});
}

export default Component;
