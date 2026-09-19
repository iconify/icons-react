import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dob_ddbnk.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dob_ddbnk"/>`,
		"fallback": "dinkie-icons:anyway-fm",
	});
}

export default Component;
