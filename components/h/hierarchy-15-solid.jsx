import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/u19doiuhb.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="u19doiuhb"/>`,
		"fallback": "streamline-plump:hierarchy-15-solid",
	});
}

export default Component;
