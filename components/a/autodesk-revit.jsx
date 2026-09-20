import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf1i8ngqy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf1i8ngqy"/>`,
		"fallback": "thesvg-color:autodesk-revit",
	});
}

export default Component;
