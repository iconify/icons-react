import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/q5kc-gb2i.css';
import '../../css/z/z8g2jgblp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="q5kc-gb2i"/><path class="z8g2jgblp"/></g>`,
		"fallback": "tabler:divide",
	});
}

export default Component;
