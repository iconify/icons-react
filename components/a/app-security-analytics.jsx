import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sfxpjhf8j.css';
import '../../css/q/qn4nzybbc.css';
import '../../css/o/owvyp-b9u.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sfxpjhf8j"/><path class="ouiIcon__fillSecondary qn4nzybbc"/><path class="owvyp-b9u"/>`,
		"fallback": "oui:app-security-analytics",
	});
}

export default Component;
