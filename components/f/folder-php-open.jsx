import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/p/pan31eb4g.css';
import '../../css/j/jef3z0auc.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="pan31eb4g"/><path class="jef3z0auc"/>`,
		"fallback": "material-icon-theme:folder-php-open",
	});
}

export default Component;
