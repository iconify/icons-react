import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ngqilitfx.css';
import '../../css/a/a1eunccfe.css';
import '../../css/h/hjqg24c6a.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<g class="ft5dv1b6b"><path class="ngqilitfx"/><path class="a1eunccfe"/><path class="hjqg24c6a"/></g>`,
		"fallback": "lucide-extended:group-duotone",
	});
}

export default Component;
