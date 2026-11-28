import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvk_gpczw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvk_gpczw"/>`,
		"fallback": "noviair-light:boxing-glove",
	});
}

export default Component;
