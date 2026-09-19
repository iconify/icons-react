import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/exy73hpiz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="exy73hpiz"/>`,
		"fallback": "gravity-ui:circle-chevron-left",
	});
}

export default Component;
