import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gkg334b8z.css';
import '../../css/r/r3uwgacnc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gkg334b8z"/><path class="r3uwgacnc"/>`,
		"fallback": "carbon:ibm-telehealth",
	});
}

export default Component;
