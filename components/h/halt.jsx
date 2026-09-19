import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mavtzccri.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mavtzccri"/>`,
		"fallback": "grommet-icons:halt",
	});
}

export default Component;
