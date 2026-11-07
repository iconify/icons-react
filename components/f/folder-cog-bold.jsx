import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/z8fbprehd.css';
import '../../css/u/u_bgapr5g.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="z8fbprehd"/><path clip-rule="evenodd" class="u_bgapr5g"/>`,
		"fallback": "solar:folder-cog-bold",
	});
}

export default Component;
