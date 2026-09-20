import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dzuynmbnk.css';
import '../../css/v/v5b94sf7e.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="dzuynmbnk"/><path class="v5b94sf7e"/></g>`,
		"fallback": "streamline-freehand-color:business-coaching-idea-jigsaw",
	});
}

export default Component;
