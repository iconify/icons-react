import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rh4nptbku.css';
import '../../css/t/ttzlj2nix.css';
import '../../css/z/zei7q3mej.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rh4nptbku"/><path class="ttzlj2nix"/><path class="zei7q3mej"/>`,
		"fallback": "energy-icons:heat-exchanger-20",
	});
}

export default Component;
