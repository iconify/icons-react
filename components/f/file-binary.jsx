import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/foer5hbdn.css';

const viewBox = {"width":12,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="foer5hbdn"/>`,
		"fallback": "octicon:file-binary",
	});
}

export default Component;
