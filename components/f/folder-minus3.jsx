import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/r/read_2bcl.css';
import '../../css/j/jx_9pv92d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="read_2bcl"/><path class="jx_9pv92d"/></g>`,
		"fallback": "reicon:folder-minus3",
	});
}

export default Component;
