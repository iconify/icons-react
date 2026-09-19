import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kxrer4n2x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kxrer4n2x"/>`,
		"fallback": "akar-icons:dental",
	});
}

export default Component;
