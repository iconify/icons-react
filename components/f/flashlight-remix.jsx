import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pyndq2b_f.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="pyndq2b_f"/>`,
		"fallback": "streamline-plump:flashlight-remix",
	});
}

export default Component;
