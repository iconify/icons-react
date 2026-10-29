import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mh2c-ku4e.css';
import '../../css/d/d-fe0zkrl.css';
import '../../css/m/mvvzj2tgs.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mh2c-ku4e wm-shadow"/><path class="d-fe0zkrl wm-k"/><path class="mvvzj2tgs wm-k"/>`,
		"fallback": "withicons-pastel:align-left",
	});
}

export default Component;
