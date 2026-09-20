import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/ec1mt9fwb.css';
import '../../css/h/h2sed2fvb.css';
import '../../css/n/nt1eozdqf.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ec1mt9fwb"/><path class="h2sed2fvb"/><path class="nt1eozdqf"/>`,
		"fallback": "octicon:file-badge-24",
	});
}

export default Component;
