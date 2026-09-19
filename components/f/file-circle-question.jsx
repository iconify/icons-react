import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/douh-p_jc.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="douh-p_jc"/>`,
		"fallback": "fa6-solid:file-circle-question",
	});
}

export default Component;
