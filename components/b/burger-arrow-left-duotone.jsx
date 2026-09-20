import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/skiv409wp.css';
import '../../css/v/v5f6axbii.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="skiv409wp"/><path class="v5f6axbii"/>`,
		"fallback": "stash:burger-arrow-left-duotone",
	});
}

export default Component;
