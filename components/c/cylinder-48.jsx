import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gnku0e3st.css';
import '../../css/u/uc2ua4u2t.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gnku0e3st"/><path class="uc2ua4u2t"/>`,
		"fallback": "energy-icons:cylinder-48",
	});
}

export default Component;
