import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/anko6fl-p.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="anko6fl-p"/>`,
		"fallback": "streamline-plump:crop-selection-solid",
	});
}

export default Component;
