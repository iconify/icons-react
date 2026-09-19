import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dah86bnyv.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dah86bnyv"/>`,
		"fallback": "cib:dependabot",
	});
}

export default Component;
