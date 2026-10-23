import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mzgb5fb4g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mzgb5fb4g"/>`,
		"fallback": "vadivam:eye-dashed",
	});
}

export default Component;
