import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ekjul2jux.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ekjul2jux"/>`,
		"fallback": "selfhst:garmin-grafana-light",
	});
}

export default Component;
