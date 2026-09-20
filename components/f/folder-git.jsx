import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qw0rhm64r.css';
import '../../css/x/xha-31bjd.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><circle class="qw0rhm64r"/><path class="xha-31bjd"/></g>`,
		"fallback": "lucide:folder-git",
	});
}

export default Component;
