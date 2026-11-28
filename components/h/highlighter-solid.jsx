import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lyvg2o91f.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lyvg2o91f"/>`,
		"fallback": "iconaut:highlighter-solid",
	});
}

export default Component;
