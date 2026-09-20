import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qos7fzbpw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qos7fzbpw"/>`,
		"fallback": "vadivam:air-vent",
	});
}

export default Component;
