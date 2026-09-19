import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hpkw_81oa.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hpkw_81oa"/>`,
		"fallback": "heroicons:cake-16-solid",
	});
}

export default Component;
