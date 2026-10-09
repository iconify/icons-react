import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/t/tw-5d-bur.css';
import '../../css/i/iox2jrb0a.css';
import '../../css/g/ghxkzbb4m.css';

const viewBox = {"width":20,"height":20};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<path class="tw-5d-bur"/><path class="iox2jrb0a"/><path class="ghxkzbb4m"/>`,
		"fallback": "energy-icons:connector-ccs-20",
	});
}

export default Component;
