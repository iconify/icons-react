import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i4ipbtb6x.css';
import '../../css/a/a3gf8y6yj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="i4ipbtb6x"/><path class="a3gf8y6yj"/></g>`,
		"fallback": "coolicons:coffee-to-go-duocolor-round",
	});
}

export default Component;
