import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/ayyw9ebet.css';
import '../../css/d/d7eo1qb3m.css';
import '../../css/m/mpamltbos.css';
import '../../css/b/bkwj7ybey.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="ayyw9ebet"/><path class="d7eo1qb3m"/><path class="mpamltbos"/><path class="bkwj7ybey"/>`,
		"fallback": "material-icon-theme:gitlab",
	});
}

export default Component;
