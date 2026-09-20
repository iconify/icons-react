import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/n/nvjgaobrz.css';
import '../../css/z/zcrcylsxu.css';
import '../../css/w/w65t7vpsn.css';
import '../../css/i/ien-av9-s.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="nvjgaobrz"/><circle class="zcrcylsxu"/><circle class="w65t7vpsn"/><path class="ien-av9-s"/></g>`,
		"fallback": "lucide:git-fork",
	});
}

export default Component;
