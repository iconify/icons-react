import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dzq3j2bza.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="dzq3j2bza"/>`,
		"fallback": "streamline-plump:escalator-up-solid",
	});
}

export default Component;
