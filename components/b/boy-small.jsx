import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gld0fn8un.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gld0fn8un"/>`,
		"fallback": "dinkie-icons:boy-small",
	});
}

export default Component;
