import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k2u665ban.css';
import '../../css/j/jtwic-8mg.css';
import '../../css/u/uhzlg7bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="k2u665ban"><path class="jtwic-8mg"/><path class="uhzlg7bgm"/></g>`,
		"fallback": "streamline-sharp-color:align-left-1",
	});
}

export default Component;
