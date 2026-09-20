import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/z8g2jgblp.css';
import '../../css/a/ac2-8hbbw.css';
import '../../css/o/oa7jysr2p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="z8g2jgblp"/><circle class="ac2-8hbbw"/><circle class="oa7jysr2p"/></g>`,
		"fallback": "majesticons:divide",
	});
}

export default Component;
