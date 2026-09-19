import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dvsnbwb2g.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dvsnbwb2g"/>`,
		"fallback": "devicon-plain:azuredevops",
	});
}

export default Component;
