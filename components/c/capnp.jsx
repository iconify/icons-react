import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gii_burqq.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gii_burqq"/>`,
		"fallback": "material-icon-theme:capnp",
	});
}

export default Component;
