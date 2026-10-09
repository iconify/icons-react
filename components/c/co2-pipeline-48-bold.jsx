import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/m3xyfn7zl.css';
import '../../css/u/u9tjb0wcp.css';
import '../../css/n/ns0qimb2z.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="m3xyfn7zl"/><path class="u9tjb0wcp"/><path class="ns0qimb2z"/>`,
		"fallback": "energy-icons:co2-pipeline-48-bold",
	});
}

export default Component;
