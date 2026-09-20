import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/j/jran4bcqd.css';
import '../../css/r/rej50nu6w.css';

const viewBox = {"width":32,"height":32};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="jran4bcqd"/><path class="rej50nu6w"/>`,
		"fallback": "streamline-pixel:entertainment-events-hobbies-reward-winner-talent",
	});
}

export default Component;
