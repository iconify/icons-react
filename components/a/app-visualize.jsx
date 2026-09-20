import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j7js7wb7z.css';
import '../../css/h/hvxpjjbnu.css';
import '../../css/y/y2-y6r8-b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j7js7wb7z ouiIcon__fillSecondary"/><path class="hvxpjjbnu"/><path class="y2-y6r8-b"/>`,
		"fallback": "oui:app-visualize",
	});
}

export default Component;
