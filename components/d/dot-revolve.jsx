import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnis27-yq.css';
import '../../css/l/l7-dtibrc.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnis27-yq"/><circle class="l7-dtibrc"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></circle>`,
		"fallback": "svg-spinners:dot-revolve",
	});
}

export default Component;
