import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lohg0pbwp.css';
import '../../css/v/v5tal47iw.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="lohg0pbwp"/><path class="v5tal47iw"/>`,
		"fallback": "lets-icons:folder-file-alt-duotone-fill",
	});
}

export default Component;
