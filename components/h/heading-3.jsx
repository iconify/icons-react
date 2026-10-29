import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/u/uvb8mfzfd.css';
import '../../css/r/robaa__jz.css';
import '../../css/u/uktdfubjw.css';
import '../../css/v/v18wlfb4r.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="uvb8mfzfd wm-k"/><path class="robaa__jz"/><path class="uktdfubjw"/><path class="v18wlfb4r wm-s"/></g>`,
		"fallback": "withicons-bauhaus:heading-3",
	});
}

export default Component;
