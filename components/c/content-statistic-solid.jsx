import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/l0bo091xi.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="l0bo091xi"/>`,
		"fallback": "streamline-plump:content-statistic-solid",
	});
}

export default Component;
