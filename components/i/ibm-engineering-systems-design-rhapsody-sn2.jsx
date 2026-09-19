import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/b84h5jsba.css';
import '../../css/l/l9-hh0blx.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="b84h5jsba"/><path class="l9-hh0blx"/>`,
		"fallback": "carbon:ibm-engineering-systems-design-rhapsody-sn2",
	});
}

export default Component;
