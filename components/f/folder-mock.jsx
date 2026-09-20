import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/s/spajzybyt.css';
import '../../css/h/hhwq3mbng.css';

const viewBox = {"width":16,"height":16};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="spajzybyt"/><path class="hhwq3mbng"/>`,
		"fallback": "material-icon-theme:folder-mock",
	});
}

export default Component;
