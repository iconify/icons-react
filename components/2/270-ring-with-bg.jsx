import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lnis27-yq.css';
import '../../css/s/s3n665z1h.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lnis27-yq"/><path class="s3n665z1h"><animateTransform attributeName="transform" dur="0.75s" repeatCount="indefinite" type="rotate" values="0 12 12;360 12 12"/></path>`,
		"fallback": "svg-spinners:270-ring-with-bg",
	});
}

export default Component;
