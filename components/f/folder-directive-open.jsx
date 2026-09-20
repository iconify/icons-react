import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/k/kpub25bol.css';
import '../../css/q/q-anz_blg.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="kpub25bol"/><path class="q-anz_blg"/>`,
		"fallback": "material-icon-theme:folder-directive-open",
	});
}

export default Component;
