import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gvh9a2pzk.css';
import '../../css/h/hgwnlybsl.css';
import '../../css/e/e_2p_w-co.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gvh9a2pzk"/><path class="hgwnlybsl"/><path class="e_2p_w-co"/>`,
		"fallback": "withicons-bauhaus:inbox",
	});
}

export default Component;
