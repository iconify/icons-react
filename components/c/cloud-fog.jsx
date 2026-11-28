import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/two12q6ud.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="two12q6ud"/>`,
		"fallback": "noviair:cloud-fog",
	});
}

export default Component;
