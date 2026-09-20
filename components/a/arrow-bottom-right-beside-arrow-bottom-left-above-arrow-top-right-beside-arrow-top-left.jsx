import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z7p7ftetp.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z7p7ftetp"/>`,
		"fallback": "pinhead:arrow-bottom-right-beside-arrow-bottom-left-above-arrow-top-right-beside-arrow-top-left",
	});
}

export default Component;
