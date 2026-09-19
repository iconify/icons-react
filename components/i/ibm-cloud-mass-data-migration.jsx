import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/y/ye20y-oru.css';
import '../../css/m/mnqs348qp.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ye20y-oru"/><path class="mnqs348qp"/>`,
		"fallback": "carbon:ibm-cloud-mass-data-migration",
	});
}

export default Component;
