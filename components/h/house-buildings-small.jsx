import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zcv_oxbkw.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zcv_oxbkw"/>`,
		"fallback": "dinkie-icons:house-buildings-small",
	});
}

export default Component;
