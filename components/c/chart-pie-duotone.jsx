import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/bp348r2av.css';
import '../../css/j/jfqxk9a8y.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="bp348r2av"/><path class="jfqxk9a8y"/>`,
		"fallback": "stash:chart-pie-duotone",
	});
}

export default Component;
