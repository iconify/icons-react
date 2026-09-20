import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/j54z2ny8a.css';
import '../../css/o/og107ss5y.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="j54z2ny8a"/><path class="og107ss5y ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-security",
	});
}

export default Component;
