import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/i/ids8rjbnb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ids8rjbnb"/>`,
		"fallback": "streamline-plump:disable-alarm-solid",
	});
}

export default Component;
