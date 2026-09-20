import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/no_cqmfti.css';
import '../../css/c/cmsj9noho.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="no_cqmfti"/><path class="cmsj9noho"/>`,
		"fallback": "selfhst:cachyos-dark",
	});
}

export default Component;
