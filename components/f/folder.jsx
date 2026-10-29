import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8nd4gbbc.css';
import '../../css/m/m9thc4yei.css';
import '../../css/j/j_-m04xen.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8nd4gbbc"/><path class="m9thc4yei"/><path class="j_-m04xen"/>`,
		"fallback": "withicons-bauhaus:folder",
	});
}

export default Component;
