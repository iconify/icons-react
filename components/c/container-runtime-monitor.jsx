import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v3vxumw8s.css';
import '../../css/g/gkjqfnbjw.css';
import '../../css/g/g7isto0zn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="v3vxumw8s"/><path class="gkjqfnbjw"/><path class="g7isto0zn"/>`,
		"fallback": "carbon:container-runtime-monitor",
	});
}

export default Component;
