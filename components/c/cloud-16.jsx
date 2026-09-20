import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jbos_mlra.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jbos_mlra"/>`,
		"fallback": "octicon:cloud-16",
	});
}

export default Component;
