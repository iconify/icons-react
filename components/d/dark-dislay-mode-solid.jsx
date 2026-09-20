import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rf2tp0b2o.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="rf2tp0b2o"/>`,
		"fallback": "streamline-plump:dark-dislay-mode-solid",
	});
}

export default Component;
