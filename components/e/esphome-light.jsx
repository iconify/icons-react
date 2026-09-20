import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z3a8ye1ad.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z3a8ye1ad"/>`,
		"fallback": "selfhst:esphome-light",
	});
}

export default Component;
