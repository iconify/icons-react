import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q3vr93bie.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="q3vr93bie"/>`,
		"fallback": "vadivam:bell-ring",
	});
}

export default Component;
