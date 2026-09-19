import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d2kvgvbvc.css';
import '../../css/j/jtc1ffbfw.css';
import '../../css/x/x29b08dnm.css';
import '../../css/o/oxtxyyb8j.css';
import '../../css/j/jd5jsnb3i.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="d2kvgvbvc"><path class="jtc1ffbfw"/><path class="x29b08dnm"/><path class="oxtxyyb8j"/><path class="jd5jsnb3i"/></g>`,
		"fallback": "gcp:identity-platform",
	});
}

export default Component;
