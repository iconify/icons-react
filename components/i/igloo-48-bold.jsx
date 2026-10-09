import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n5xv1ob9c.css';
import '../../css/t/tr-eedcjf.css';
import '../../css/b/bewutf38v.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n5xv1ob9c"/><path class="tr-eedcjf"/><path class="bewutf38v"/>`,
		"fallback": "energy-icons:igloo-48-bold",
	});
}

export default Component;
