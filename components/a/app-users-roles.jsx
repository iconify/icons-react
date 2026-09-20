import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oa312fb4p.css';
import '../../css/f/fl2n-_b6d.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oa312fb4p"/><path class="fl2n-_b6d ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-users-roles",
	});
}

export default Component;
