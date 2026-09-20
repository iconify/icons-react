import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/e/eva2sp1dm.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="eva2sp1dm"/>`,
		"fallback": "streamline-plump:deepfake-technology-1-remix",
	});
}

export default Component;
