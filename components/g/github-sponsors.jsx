import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t5ecocnoe.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="t5ecocnoe"/>`,
		"fallback": "material-icon-theme:github-sponsors",
	});
}

export default Component;
