import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qf2xrif2j.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="qf2xrif2j"/>`,
		"fallback": "gravity-ui:circle-arrow-left",
	});
}

export default Component;
