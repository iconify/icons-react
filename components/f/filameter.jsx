import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uk5-3bb5f.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="uk5-3bb5f"/>`,
		"fallback": "selfhst:filameter",
	});
}

export default Component;
