import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/l/lz_2qjfda.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="lz_2qjfda"/>`,
		"fallback": "material-icon-theme:codeowners",
	});
}

export default Component;
