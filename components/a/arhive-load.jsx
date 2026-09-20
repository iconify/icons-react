import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/flen3tbdj.css';
import '../../css/w/widbvqqbu.css';
import '../../css/b/b4t8s5bof.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="flen3tbdj"><path class="widbvqqbu"/><path class="b4t8s5bof"/></g>`,
		"fallback": "lets-icons:arhive-load",
	});
}

export default Component;
