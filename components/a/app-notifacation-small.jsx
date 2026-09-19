import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sned-lbtq.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sned-lbtq"/>`,
		"fallback": "dinkie-icons:app-notifacation-small",
	});
}

export default Component;
