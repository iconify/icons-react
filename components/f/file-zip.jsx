import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anwcf1z6i.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="anwcf1z6i"/>`,
		"fallback": "codicon:file-zip",
	});
}

export default Component;
