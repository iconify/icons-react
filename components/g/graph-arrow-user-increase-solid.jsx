import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kotf-_org.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="kotf-_org"/>`,
		"fallback": "streamline-plump:graph-arrow-user-increase-solid",
	});
}

export default Component;
