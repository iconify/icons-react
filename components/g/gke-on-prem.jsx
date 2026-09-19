import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sjw4yqthe.css';
import '../../css/y/ylop8ebio.css';
import '../../css/s/s0fwv-0ek.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sjw4yqthe"/><path class="ylop8ebio"/><path class="s0fwv-0ek"/>`,
		"fallback": "gcp:gke-on-prem",
	});
}

export default Component;
