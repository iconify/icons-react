import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vz464s1hv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="vz464s1hv"/>`,
		"fallback": "streamline-block:devices-phone",
	});
}

export default Component;
