import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/yox6y9bmv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="yox6y9bmv"/>`,
		"fallback": "icomoon-free:angry2",
	});
}

export default Component;
