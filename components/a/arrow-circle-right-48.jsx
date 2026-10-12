import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/h/hac57wbhi.css';
import '../../css/y/y_jdkab7z.css';
import '../../css/d/downlpbuh.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="hac57wbhi"/><path class="y_jdkab7z"/><path class="downlpbuh"/>`,
		"fallback": "energy-icons:arrow-circle-right-48",
	});
}

export default Component;
