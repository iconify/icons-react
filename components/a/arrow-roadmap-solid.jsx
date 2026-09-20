import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/emblogu4b.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="emblogu4b"/>`,
		"fallback": "streamline-plump:arrow-roadmap-solid",
	});
}

export default Component;
