import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tbntjqb3v.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tbntjqb3v"/>`,
		"fallback": "octicon:file-submodule-16",
	});
}

export default Component;
