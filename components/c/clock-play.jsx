import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/ve0ei_2st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ve0ei_2st"/>`,
		"fallback": "noviair-light:clock-play",
	});
}

export default Component;
