import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/npmh_5sus.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="npmh_5sus"/>`,
		"fallback": "griddy-icons:building-alt-02",
	});
}

export default Component;
