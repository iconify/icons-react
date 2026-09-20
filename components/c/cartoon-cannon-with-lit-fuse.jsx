import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/oe47tqu_v.css';

const viewBox = {"width":15,"height":15};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="oe47tqu_v"/>`,
		"fallback": "pinhead:cartoon-cannon-with-lit-fuse",
	});
}

export default Component;
