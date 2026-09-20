import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/o-yi4p56d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="o-yi4p56d"/>`,
		"fallback": "streamline-plump:beer-pitch-solid",
	});
}

export default Component;
