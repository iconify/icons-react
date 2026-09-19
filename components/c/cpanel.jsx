import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xe7gk_bbo.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xe7gk_bbo"/>`,
		"fallback": "devicon:cpanel",
	});
}

export default Component;
