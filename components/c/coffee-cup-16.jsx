import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/o/ow0kztb5r.css';
import '../../css/h/hq1cjqbib.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path clip-rule="evenodd" class="ow0kztb5r"/><path class="hq1cjqbib"/>`,
		"fallback": "qlementine-icons:coffee-cup-16",
	});
}

export default Component;
