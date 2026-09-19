import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qv9qadb-e.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qv9qadb-e"/>`,
		"fallback": "gravity-ui:circle-number-3",
	});
}

export default Component;
