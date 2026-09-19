import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/qka82ly9k.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="qka82ly9k"/>`,
		"fallback": "icon-park-outline:collect-computer",
	});
}

export default Component;
