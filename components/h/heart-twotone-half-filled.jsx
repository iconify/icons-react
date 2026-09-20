import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pam3jz.css';
import '../../css/y/ydovum.css';
import '../../css/l/lg8jeu.css';
import '../../css/y/yi8b0f.css';
import '../../css/f/fill-to-1.css';
import '../../css/f/fill-to-0.css';
import '../../css/f/fill-to-0_3.css';
import '../../css/s/so-from-30.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pam3jz ydovum"/><path class="lg8jeu ydovum"/><path class="yi8b0f"/>`,
		"fallback": "line-md:heart-twotone-half-filled",
	});
}

export default Component;
