import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ecgynd14b.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ecgynd14b"/>`,
		"fallback": "fluent-mdl2:assessment-group-template",
	});
}

export default Component;
