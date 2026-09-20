import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/t/t_-408ewl.css';
import '../../css/w/wk173bt9a.css';
import '../../css/f/f8njk2b6e.css';
import '../../css/y/yghja8-9z.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="t_-408ewl"/><path clip-rule="evenodd" class="wk173bt9a"/><path clip-rule="evenodd" class="f8njk2b6e"/><path clip-rule="evenodd" class="yghja8-9z"/></g>`,
		"fallback": "streamline-sharp-color:definition-search-book-flat",
	});
}

export default Component;
