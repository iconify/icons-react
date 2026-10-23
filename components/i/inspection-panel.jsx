import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbc2rh_nz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbc2rh_nz"/>`,
		"fallback": "vadivam:inspection-panel",
	});
}

export default Component;
