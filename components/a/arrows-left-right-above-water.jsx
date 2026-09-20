import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/e__73ozkc.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="e__73ozkc"/>`,
		"fallback": "pinhead:arrows-left-right-above-water",
	});
}

export default Component;
