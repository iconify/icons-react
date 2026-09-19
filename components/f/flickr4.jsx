import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pcbic_sri.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pcbic_sri"/>`,
		"fallback": "icomoon-free:flickr4",
	});
}

export default Component;
