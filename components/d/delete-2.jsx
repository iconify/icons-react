import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/gf9770bmr.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="gf9770bmr"/>`,
		"fallback": "streamline-sharp:delete-2",
	});
}

export default Component;
