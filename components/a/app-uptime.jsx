import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/k3symwlop.css';
import '../../css/y/ypo2h9ruk.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="k3symwlop ouiIcon__fillSecondary"/><path class="ypo2h9ruk"/>`,
		"fallback": "oui:app-uptime",
	});
}

export default Component;
