import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/l/ljds2sb2k.css';
import '../../css/m/mc2zb0bvp.css';
import '../../css/w/wprhdbvtw.css';
import '../../css/j/jod0q8b_a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="ljds2sb2k"/><g class="mc2zb0bvp"><circle class="wprhdbvtw"/><path class="jod0q8b_a"/></g></g>`,
		"fallback": "struq:folder-find",
	});
}

export default Component;
