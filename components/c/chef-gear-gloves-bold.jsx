import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lfywcyb4k.css';
import '../../css/g/g-tdjse5y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lfywcyb4k"/><path class="g-tdjse5y"/>`,
		"fallback": "streamline-ultimate:chef-gear-gloves-bold",
	});
}

export default Component;
