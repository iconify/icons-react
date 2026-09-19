import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jx0p4fbya.css';
import '../../css/j/jk87n9xrw.css';
import '../../css/e/egahehbxi.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="jx0p4fbya"><path class="jk87n9xrw"/><path class="egahehbxi"/></g>`,
		"fallback": "hugeicons:ai-editing",
	});
}

export default Component;
