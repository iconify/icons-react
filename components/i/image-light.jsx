import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/xi2419bxd.css';
import '../../css/h/hcenjub2j.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="xi2419bxd"/><path class="hcenjub2j"/>`,
		"fallback": "stash:image-light",
	});
}

export default Component;
