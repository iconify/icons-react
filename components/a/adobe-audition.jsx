import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tfahdz_nv.css';

const viewBox = {"width":12,"height":12};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tfahdz_nv"/>`,
		"fallback": "dinkie-icons:adobe-audition",
	});
}

export default Component;
