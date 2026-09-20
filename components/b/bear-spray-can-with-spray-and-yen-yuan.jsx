import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rvn4_zbbn.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rvn4_zbbn"/>`,
		"fallback": "pinhead:bear-spray-can-with-spray-and-yen-yuan",
	});
}

export default Component;
