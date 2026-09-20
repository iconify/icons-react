import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/n11sem1pi.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="n11sem1pi"/>`,
		"fallback": "octicon:file-code",
	});
}

export default Component;
