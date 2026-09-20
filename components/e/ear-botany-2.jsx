import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xtbu4u2st.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xtbu4u2st"/>`,
		"fallback": "roentgen:ear-botany-2",
	});
}

export default Component;
