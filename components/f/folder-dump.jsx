import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/sbt53ppzw.css';
import '../../css/k/krr-sfb0q.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="sbt53ppzw"/><path class="krr-sfb0q"/>`,
		"fallback": "material-icon-theme:folder-dump",
	});
}

export default Component;
