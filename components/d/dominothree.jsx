import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zf4c-9c0j.css';

const viewBox = {"width":961,"height":960};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zf4c-9c0j"/>`,
		"fallback": "whh:dominothree",
	});
}

export default Component;
