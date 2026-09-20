import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/a/a-tnymbfx.css';
import '../../css/j/jr75xkezj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="a-tnymbfx"/><path class="jr75xkezj"/></g>`,
		"fallback": "tabler:brand-bandlab",
	});
}

export default Component;
