import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/b/b5w3hk87x.css';
import '../../css/g/gd6wjjbrj.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="b5w3hk87x"/><path class="gd6wjjbrj"/></g>`,
		"fallback": "coolicons:battery-low-duocolor-round",
	});
}

export default Component;
