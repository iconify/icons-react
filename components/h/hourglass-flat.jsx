import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/i4a8zrxzy.css';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/iwpj5tbof.css';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vooi_2byt.css';

const viewBox = {"width":14,"height":14};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<defs><path id="SVG1JY94c6U" class="i4a8zrxzy"/></defs><g class="ft5dv1b6b"><path clip-rule="evenodd" class="iwpj5tbof"/><use href="#SVG1JY94c6U" clip-rule="evenodd" class="d2kvgvbvc"/><use href="#SVG1JY94c6U" clip-rule="evenodd" class="d2kvgvbvc"/><path class="vooi_2byt"/></g>`,
		"fallback": "streamline-flex-color:hourglass-flat",
	});
}

export default Component;
