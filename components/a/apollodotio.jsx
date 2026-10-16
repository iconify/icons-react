import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp60qnapt.css';

const viewBox = {"width":303,"height":303};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sp60qnapt"/>`,
		"fallback": "thesvg-color:apollodotio",
	});
}

export default Component;
