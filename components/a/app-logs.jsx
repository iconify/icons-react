import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sxys06b2v.css';
import '../../css/k/kju8o8xdi.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sxys06b2v"/><path class="kju8o8xdi ouiIcon__fillSecondary"/>`,
		"fallback": "oui:app-logs",
	});
}

export default Component;
