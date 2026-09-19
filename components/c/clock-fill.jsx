import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hg23ywbii.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hg23ywbii"/>`,
		"fallback": "bi:clock-fill",
	});
}

export default Component;
