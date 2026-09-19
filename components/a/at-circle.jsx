import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/fso_kcrdw.css';

const viewBox = {"width":56,"height":56};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="fso_kcrdw"/>`,
		"fallback": "f7:at-circle",
	});
}

export default Component;
