import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gp1j6ubpv.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gp1j6ubpv"/>`,
		"fallback": "sidekickicons:circle-dashed-16-solid",
	});
}

export default Component;
