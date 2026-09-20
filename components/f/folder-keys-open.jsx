import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/m/mpc9hgrvp.css';
import '../../css/i/iywcnqb5a.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="mpc9hgrvp"/><path class="iywcnqb5a"/>`,
		"fallback": "material-icon-theme:folder-keys-open",
	});
}

export default Component;
