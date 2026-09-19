import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z-r-wyybg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z-r-wyybg"/>`,
		"fallback": "icomoon-free:envelop",
	});
}

export default Component;
