import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nz-trqb2v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="nz-trqb2v"/>`,
		"fallback": "qlementine-icons:gitlab-fill-24",
	});
}

export default Component;
