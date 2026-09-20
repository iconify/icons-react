import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/veqz34bjq.css';
import '../../css/a/am9dy-_0b.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ouiIcon__fillSecondary veqz34bjq"/><path class="am9dy-_0b"/>`,
		"fallback": "oui:app-graph",
	});
}

export default Component;
