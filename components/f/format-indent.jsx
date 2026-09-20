import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sp617mb0p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path vector-effect="non-scaling-stroke" class="sp617mb0p"/>`,
		"fallback": "wordpress:format-indent",
	});
}

export default Component;
