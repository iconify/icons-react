import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf2o4ub-c.css';
import '../../css/a/aklkyaciw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rf2o4ub-c"/><path class="aklkyaciw"/>`,
		"fallback": "streamline-ultimate:compass-1-bold",
	});
}

export default Component;
