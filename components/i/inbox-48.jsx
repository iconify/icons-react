import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/b/byr1kccnj.css';
import '../../css/v/v5yc14bmm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="byr1kccnj"/><path class="v5yc14bmm"/>`,
		"fallback": "energy-icons:inbox-48",
	});
}

export default Component;
