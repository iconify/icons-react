import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sn_vi9bnk.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sn_vi9bnk"/>`,
		"fallback": "gravity-ui:chevrons-collapse-vertical-to-line",
	});
}

export default Component;
