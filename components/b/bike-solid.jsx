import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/snp3cqm3o.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="snp3cqm3o"/>`,
		"fallback": "iconaut:bike-solid",
	});
}

export default Component;
