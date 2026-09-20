import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jap95xb6l.css';
import '../../css/g/gkzp8sbnv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jap95xb6l"/><path class="gkzp8sbnv"/>`,
		"fallback": "vaadin:at",
	});
}

export default Component;
