import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s_899058x.css';

const viewBox = {"width":576,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="s_899058x"/>`,
		"fallback": "fa6-solid:house-flood-water",
	});
}

export default Component;
