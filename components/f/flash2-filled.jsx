import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vifuy2dbt.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vifuy2dbt"/>`,
		"fallback": "reicon:flash2-filled",
	});
}

export default Component;
