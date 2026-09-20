import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/v35lq2b6a.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="v35lq2b6a"/>`,
		"fallback": "streamline-plump-color:gold-flat",
	});
}

export default Component;
