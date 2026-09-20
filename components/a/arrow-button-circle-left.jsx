import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/k/k6-l2zd2f.css';
import '../../css/w/wjja79ocj.css';
import '../../css/w/wpmuhyb3o.css';
import '../../css/w/w36iwebbu.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="k6-l2zd2f"/><path class="wjja79ocj"/><path class="wpmuhyb3o"/><path class="w36iwebbu"/></g>`,
		"fallback": "streamline-ultimate-color:arrow-button-circle-left",
	});
}

export default Component;
