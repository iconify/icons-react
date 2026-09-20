import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/ppoewyanq.css';
import '../../css/u/ungtlkbnb.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ppoewyanq"/><path class="ungtlkbnb"/>`,
		"fallback": "material-icon-theme:folder-snapcraft",
	});
}

export default Component;
