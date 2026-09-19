import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/s9cl3zbei.css';
import '../../css/s/sg95bbc_h.css';
import '../../css/t/tbvkbnb5d.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="s9cl3zbei"><path class="sg95bbc_h"/><path class="tbvkbnb5d"/></g>`,
		"fallback": "icon-park:avocado",
	});
}

export default Component;
