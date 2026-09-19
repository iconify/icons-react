import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ue7ba3bjp.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<rect class="ue7ba3bjp"/>`,
		"fallback": "grommet-icons:home-option",
	});
}

export default Component;
