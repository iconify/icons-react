import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/c/cv1xizbgy.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="cv1xizbgy"/>`,
		"fallback": "thesvg-color:beijing-subway",
	});
}

export default Component;
