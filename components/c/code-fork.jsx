import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t22nb_p7a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t22nb_p7a"/>`,
		"fallback": "gravity-ui:code-fork",
	});
}

export default Component;
