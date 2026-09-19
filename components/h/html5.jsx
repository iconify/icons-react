import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rzgp6absl.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rzgp6absl"/>`,
		"fallback": "grommet-icons:html5",
	});
}

export default Component;
