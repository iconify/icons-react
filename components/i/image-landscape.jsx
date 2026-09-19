import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n3vra2bpp.css';
import '../../css/k/k80k31tai.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n3vra2bpp"/><path class="k80k31tai"/>`,
		"fallback": "boxicons:image-landscape",
	});
}

export default Component;
