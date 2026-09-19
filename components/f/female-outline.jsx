import { Icon } from '@iconify/css-react';
import { createElement } from 'react';
import '../../css/z/zpm4kob4e.css';
import '../../css/z/zbsn2h2kc.css';

const viewBox = {"width":512,"height":512};

/** @param {{width?: string; height?: string;}} */
function Component({width, height, ...props}) {
	return createElement(Icon, {
		...props,
		width,
		height,
		viewBox,
		"content": `<circle class="zpm4kob4e"/><path class="zbsn2h2kc"/>`,
		"fallback": "famicons:female-outline",
	});
}

export default Component;
