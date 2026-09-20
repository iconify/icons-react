import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpub25bol.css';
import '../../css/f/fplzncgdx.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpub25bol"/><path class="fplzncgdx"/>`,
		"fallback": "material-icon-theme:folder-liquibase-open",
	});
}

export default Component;
