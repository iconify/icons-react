import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/f/fxkgtbnra.css';
import '../../css/w/ww8n9zbdv.css';
import '../../css/l/lh9--2mlv.css';
import '../../css/e/epyi31bqc.css';

const viewBox = {"width":1024,"height":1024};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><rect class="fxkgtbnra"/><circle class="ww8n9zbdv"/><circle class="lh9--2mlv"/><circle class="epyi31bqc"/></g>`,
		"fallback": "thesvg-color:daisyui",
	});
}

export default Component;
