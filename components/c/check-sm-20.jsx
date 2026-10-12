import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/iz7sqrpkg.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="iz7sqrpkg"/>`,
		"fallback": "garden:check-sm-20",
	});
}

export default Component;
