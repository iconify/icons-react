import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gride0g4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gride0g4g"/>`,
		"fallback": "vadivam:beef-off",
	});
}

export default Component;
