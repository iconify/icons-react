import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/r/rawf947wb.css';
import '../../css/b/baxfr6ous.css';
import '../../css/k/k4thwtkyl.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="rawf947wb"/><path class="baxfr6ous"/><path class="k4thwtkyl"/>`,
		"fallback": "streamline-pixel:content-files-favorite-book",
	});
}

export default Component;
