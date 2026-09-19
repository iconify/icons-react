import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bs_ds4bwb.css';
import '../../css/t/t1tvrdn3n.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bs_ds4bwb"/><path class="t1tvrdn3n"/>`,
		"fallback": "circum:delivery-truck",
	});
}

export default Component;
