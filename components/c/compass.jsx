import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gw96a2bzf.css';
import '../../css/d/ds1orlb4x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer gw96a2bzf"/><path class="ds1orlb4x duoicon-primary-layer"/>`,
		"fallback": "duo-icons:compass",
	});
}

export default Component;
