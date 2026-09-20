import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/w/wgupo11oq.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="wgupo11oq"/>`,
		"fallback": "material-icon-theme:csharp",
	});
}

export default Component;
