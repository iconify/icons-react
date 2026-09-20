import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/a9hba7krf.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="a9hba7krf"/>`,
		"fallback": "streamline-plump:focus-points-remix",
	});
}

export default Component;
