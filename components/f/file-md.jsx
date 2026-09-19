import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/di8ni_dks.css';
import '../../css/z/z_6vl9bgm.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="di8ni_dks"/><path class="z_6vl9bgm"/>`,
		"fallback": "bxs:file-md",
	});
}

export default Component;
