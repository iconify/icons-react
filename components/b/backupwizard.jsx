import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x5t8n1bbv.css';

const viewBox = {"width":1025,"height":1025};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x5t8n1bbv"/>`,
		"fallback": "whh:backupwizard",
	});
}

export default Component;
