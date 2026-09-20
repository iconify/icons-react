import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oquz19bwk.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oquz19bwk"/>`,
		"fallback": "pinhead:car-with-pound",
	});
}

export default Component;
