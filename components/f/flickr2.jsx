import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tn4nxni_i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tn4nxni_i"/>`,
		"fallback": "icomoon-free:flickr2",
	});
}

export default Component;
