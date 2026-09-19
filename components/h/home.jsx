import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tcn075b6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tcn075b6r"/>`,
		"fallback": "codicon:home",
	});
}

export default Component;
