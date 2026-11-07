import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/a/akht0jb-p.css';
import '../../css/e/emonbzgoh.css';
import '../../css/k/k84iwjbrg.css';
import '../../css/p/purlkwp6v.css';

const viewBox = {"width":24,"height":24};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="akht0jb-p"/><path class="emonbzgoh"/><path class="k84iwjbrg"/><path class="purlkwp6v"/>`,
		"fallback": "solar:blocks-outline",
	});
}

export default Component;
