import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/to-5kdesz.css';
import '../../css/z/zy7t_f0cs.css';
import '../../css/j/jxi-z8b-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="to-5kdesz"><path class="zy7t_f0cs"/><path clip-rule="evenodd" class="jxi-z8b-s"/></g>`,
		"fallback": "streamline-logos:google-adsense-logo",
	});
}

export default Component;
