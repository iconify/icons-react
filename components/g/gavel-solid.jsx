import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tyz2nmbtl.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tyz2nmbtl"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:gavel-solid",
	});
}

export default Component;
