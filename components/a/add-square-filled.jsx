import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ufkg_db0y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ufkg_db0y"/>`,
		"fallback": "reicon:add-square-filled",
	});
}

export default Component;
