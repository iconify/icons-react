import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hntgybcog.css';
import '../../css/w/wmbp6pb5r.css';
import '../../css/w/wz9oz5bbq.css';
import '../../css/v/vbweqjbio.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="hntgybcog"><path class="wmbp6pb5r"/><path class="wz9oz5bbq"/><path class="vbweqjbio"/></g>`,
		"fallback": "streamline-ultimate:delivery-drone",
	});
}

export default Component;
