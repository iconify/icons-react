import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eqn04vbve.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="eqn04vbve"/>`,
		"fallback": "icon-park-outline:diamond-two",
	});
}

export default Component;
