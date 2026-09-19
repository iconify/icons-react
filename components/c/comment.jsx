import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/t_n19kbzv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="t_n19kbzv"/>`,
		"fallback": "gravity-ui:comment",
	});
}

export default Component;
