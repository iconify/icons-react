import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/m/mt1g65bni.css';
import '../../css/p/pzv8cpr-l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="mt1g65bni"/><path class="pzv8cpr-l"/></g>`,
		"fallback": "streamline-ultimate:image-file-eps",
	});
}

export default Component;
