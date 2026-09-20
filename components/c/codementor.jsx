import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg1zjbckc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg1zjbckc"/>`,
		"fallback": "thesvg-color:codementor",
	});
}

export default Component;
