import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/u/ui-tk2bch.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ui-tk2bch"/>`,
		"fallback": "pixel:grid-solid",
	});
}

export default Component;
