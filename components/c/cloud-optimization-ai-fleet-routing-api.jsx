import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/drwktt30k.css';
import '../../css/x/xcjpxq55x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="drwktt30k"/><path class="xcjpxq55x"/>`,
		"fallback": "gcp:cloud-optimization-ai-fleet-routing-api",
	});
}

export default Component;
