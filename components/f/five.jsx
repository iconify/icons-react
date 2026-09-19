import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z4nzf6r2x.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z4nzf6r2x"/>`,
		"fallback": "icon-park-solid:five",
	});
}

export default Component;
