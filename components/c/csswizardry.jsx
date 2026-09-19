import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kb025pbdn.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kb025pbdn"/>`,
		"fallback": "cib:csswizardry",
	});
}

export default Component;
