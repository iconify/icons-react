import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dbw96sg2y.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dbw96sg2y"/>`,
		"fallback": "selfhst:hashicorp-vagrant-light",
	});
}

export default Component;
