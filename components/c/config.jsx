import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sg09ase6l.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sg09ase6l"/>`,
		"fallback": "catppuccin:config",
	});
}

export default Component;
