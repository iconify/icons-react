import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/g/ggv24lm0s.css';
import '../../css/q/qki1cds-o.css';
import '../../css/s/s6aioybet.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="duoicon-secondary-layer ggv24lm0s"/><path class="duoicon-primary-layer qki1cds-o"/><path class="duoicon-primary-layer s6aioybet"/>`,
		"fallback": "duo-icons:g-translate",
	});
}

export default Component;
