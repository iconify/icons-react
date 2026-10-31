import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vs0d6y-st.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vs0d6y-st"/>`,
		"fallback": "coolicons:hotel-fill-round",
	});
}

export default Component;
