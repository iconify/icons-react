import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zhocsxiwx.css';
import '../../css/h/hlr7qvbgb.css';
import '../../css/y/y1m3u927f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zhocsxiwx"/><path class="hlr7qvbgb"/><path class="y1m3u927f"/>`,
		"fallback": "solar:floor-lamp-minimalistic-bold",
	});
}

export default Component;
