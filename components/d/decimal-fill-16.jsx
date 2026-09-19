import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/au450cbud.css';
import '../../css/b/bztrvmj6r.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<ellipse class="au450cbud"/><circle class="bztrvmj6r"/>`,
		"fallback": "garden:decimal-fill-16",
	});
}

export default Component;
