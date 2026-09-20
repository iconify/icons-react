import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/d6i-ucciw.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="d6i-ucciw"/>`,
		"fallback": "streamline-plump:change-background-transparent-remix",
	});
}

export default Component;
