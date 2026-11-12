import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mox62k4cc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mox62k4cc"/>`,
		"fallback": "selfhst:cooklang-chef-light",
	});
}

export default Component;
