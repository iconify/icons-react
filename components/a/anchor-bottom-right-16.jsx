import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/d/dqbp4ccby.css';
import '../../css/f/fos7arooz.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="dqbp4ccby"/><path class="fos7arooz"/>`,
		"fallback": "qlementine-icons:anchor-bottom-right-16",
	});
}

export default Component;
