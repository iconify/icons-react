import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sr0j3ubit.css';
import '../../css/g/go-hdki3d.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sr0j3ubit"/><path class="go-hdki3d"/>`,
		"fallback": "bxs:chat",
	});
}

export default Component;
