import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/ndzbs8gub.css';

const viewBox = {"width":2048,"height":2048};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ndzbs8gub"/>`,
		"fallback": "fluent-mdl2:amazon-web-services-logo",
	});
}

export default Component;
