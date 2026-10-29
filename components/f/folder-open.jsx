import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kwd0xy2he.css';
import '../../css/u/u8e_e0bbm.css';
import '../../css/i/i_7whfb5x.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kwd0xy2he"/><path class="u8e_e0bbm"/><path class="i_7whfb5x"/>`,
		"fallback": "withicons-bauhaus:folder-open",
	});
}

export default Component;
