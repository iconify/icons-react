import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zqjtt0biw.css';
import '../../css/a/a3yyyw2au.css';

const viewBox = {"width":48,"height":48};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="zqjtt0biw"/><path class="a3yyyw2au"/>`,
		"fallback": "energy-icons:droplet-48",
	});
}

export default Component;
