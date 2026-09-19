import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/v/vr2o12b8y.css';

const viewBox = {"width":8,"height":8};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="vr2o12b8y"/>`,
		"fallback": "dinkie-icons:copies-small",
	});
}

export default Component;
