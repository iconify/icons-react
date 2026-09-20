import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/v/vgba34o3n.css';
import '../../css/h/hasbc2bzw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="vgba34o3n"/><path class="hasbc2bzw"/></g>`,
		"fallback": "reicon:folder-open3",
	});
}

export default Component;
