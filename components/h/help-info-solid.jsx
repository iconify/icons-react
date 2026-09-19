import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/uu057eu8j.css';
import '../../css/q/qput4lnis.css';
import '../../css/m/m2o3sh-9c.css';

const viewBox = {"width":36,"height":36};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="clr-i-solid clr-i-solid-path-1 uu057eu8j"/><path class="clr-i-solid clr-i-solid-path-2 qput4lnis"/><path class="m2o3sh-9c"/>`,
		"fallback": "clarity:help-info-solid",
	});
}

export default Component;
