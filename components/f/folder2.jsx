import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/in1dviszv.css';
import '../../css/j/jx_9pv92d.css';
import '../../css/m/m_5zghb_l.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="in1dviszv"><path class="jx_9pv92d"/><path class="m_5zghb_l"/></g>`,
		"fallback": "reicon:folder2",
	});
}

export default Component;
