import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b3jkgcbxu.css';

const viewBox = {"width":128,"height":128};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b3jkgcbxu"/>`,
		"fallback": "devicon-plain:aerospace",
	});
}

export default Component;
