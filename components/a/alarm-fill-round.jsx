import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/md5jwx3_p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="md5jwx3_p"/>`,
		"fallback": "coolicons:alarm-fill-round",
	});
}

export default Component;
