import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/s-2uyiy9q.css';
import '../../css/a/aozpr5jui.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="nrj6p8qat"><path class="s-2uyiy9q"/><path class="aozpr5jui"/></g>`,
		"fallback": "lucide:beer",
	});
}

export default Component;
