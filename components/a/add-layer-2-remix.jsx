import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/q/q-6952jyv.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="q-6952jyv"/>`,
		"fallback": "streamline-plump:add-layer-2-remix",
	});
}

export default Component;
