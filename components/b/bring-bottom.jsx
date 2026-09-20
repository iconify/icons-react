import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/x/x0ofyln1p.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="x0ofyln1p"/>`,
		"fallback": "uil:bring-bottom",
	});
}

export default Component;
