import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbtl-i_cz.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbtl-i_cz"/>`,
		"fallback": "bxs:download",
	});
}

export default Component;
